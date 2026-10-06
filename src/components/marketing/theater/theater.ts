import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { claimCard, hookCard, HOOK_EXIT } from "./ad";
import { SCENES } from "./scenes";

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

const FADE_OUT = { duration: 0.2, ease: "power1.in" };
const FADE_IN = { duration: 0.35, ease: "power1.out" };
const ARROW_STEPS: Record<string, number> = {
  ArrowDown: 1,
  ArrowRight: 1,
  ArrowUp: -1,
  ArrowLeft: -1,
};

/**
 * Runs the services theater inside `root`: tabs switch the scene on the
 * screen with a short fade and, until the visitor picks a tab, scenes play
 * one after another like a presentation. Each scene plays as a short ad: a
 * hook card, the scene itself and a claim card from the scene's `payoff`
 * label on. Animations only run while the theater is on screen.
 *
 * With reduced motion, tabs still work but scenes stay as still frames.
 */
export function initTheater(root: HTMLElement) {
  const tabs = Array.from(
    root.querySelectorAll<HTMLButtonElement>('[role="tab"]'),
  );
  const panels = tabs.map((tab) =>
    document.getElementById(tab.getAttribute("aria-controls") ?? ""),
  );
  const screen = root.querySelector<HTMLElement>("[data-theater-screen]");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  let current = tabs.findIndex(
    (tab) => tab.getAttribute("aria-selected") === "true",
  );
  let autoplay = !reduceMotion;
  let isVisible = false;
  let scene: { context: gsap.Context; loop: gsap.core.Timeline } | undefined;
  let fadeTimeline: gsap.core.Timeline | undefined;

  const progressOf = (index: number) =>
    tabs[index].querySelector<HTMLElement>("[data-tab-progress]");

  const showTab = (index: number) => {
    tabs.forEach((tab, tabIndex) => {
      const isSelected = tabIndex === index;
      tab.setAttribute("aria-selected", String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      panels[tabIndex]?.toggleAttribute("hidden", !isSelected);
    });
    tabs.forEach((_, tabIndex) => {
      const progress = progressOf(tabIndex);
      if (progress)
        gsap.set(progress, { scaleY: tabIndex === index && !autoplay ? 1 : 0 });
    });
    current = index;
  };

  const stopScene = () => {
    scene?.context.revert();
    scene = undefined;
  };

  const startScene = () => {
    stopScene();
    const panel = panels[current];
    const svg = panel?.querySelector<SVGSVGElement>("[data-scene-svg]");
    const hook = panel?.querySelector<HTMLElement>("[data-ad-hook]");
    const claim = panel?.querySelector<HTMLElement>("[data-ad-claim]");
    const build = SCENES[svg?.dataset.sceneSvg ?? ""];
    if (!svg || !hook || !claim || !build) return;

    const progress = progressOf(current);
    let loop!: gsap.core.Timeline;
    const context = gsap.context(() => {
      loop = gsap.timeline({
        repeat: -1,
        onUpdate: () => {
          if (autoplay && progress)
            gsap.set(progress, { scaleY: loop.progress() });
        },
        onRepeat: () => {
          if (!autoplay) return;
          // Keep the claim card on screen while the theater fades out.
          loop.pause().time(loop.duration() - 0.01, true);
          changeTo((current + 1) % tabs.length);
        },
      });
      const sceneTimeline = build(svg);
      const payoff =
        sceneTimeline.labels.payoff ?? sceneTimeline.duration();
      loop
        .add(hookCard(hook), 0)
        .add(sceneTimeline, HOOK_EXIT)
        .add(claimCard(claim), HOOK_EXIT + payoff);
    }, svg);
    if (!isVisible) loop.pause();
    scene = { context, loop };
  };

  // Fades the screen out, swaps the scene and fades it back in.
  const changeTo = (index: number) => {
    if (reduceMotion) {
      showTab(index);
      return;
    }
    fadeTimeline?.kill();
    scene?.loop.pause();
    fadeTimeline = gsap
      .timeline()
      .to(screen, { autoAlpha: 0, ...FADE_OUT })
      .add(() => {
        showTab(index);
        startScene();
      })
      .to(screen, { autoAlpha: 1, ...FADE_IN });
  };

  const selectByUser = (index: number) => {
    autoplay = false;
    if (index === current) {
      const progress = progressOf(index);
      if (progress) gsap.set(progress, { scaleY: 1 });
      return;
    }
    changeTo(index);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectByUser(index));
    tab.addEventListener("keydown", (event) => {
      const step = ARROW_STEPS[event.key];
      if (!step) return;
      event.preventDefault();
      const next = (index + step + tabs.length) % tabs.length;
      selectByUser(next);
      tabs[next].focus();
    });
  });

  if (reduceMotion) return;

  showTab(current);
  startScene();

  new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting;
      if (!isVisible) {
        scene?.loop.pause();
        return;
      }
      if (!fadeTimeline?.isActive()) scene?.loop.resume();
    },
    { threshold: 0.4 },
  ).observe(root);
}
