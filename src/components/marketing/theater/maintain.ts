import { gsap } from "gsap";
import { PALETTE } from "./palette";
import { scenePart, type SceneBuilder } from "./types";

const SPARK_DISTANCE = 44;

// A bug breaks the site, a shield squashes it, the page snaps back and every
// maintenance check (backup, update, security) is completed.
export const maintainScene: SceneBuilder = (svg) => {
  const q = gsap.utils.selector(svg);
  const blocks = q("[data-block]");
  const hero = q("[data-part=hero]");
  const bug = q("[data-part=bug]");
  const shield = q("[data-part=shield]");
  const rows = q("[data-part=row]");
  const bugPath = scenePart<SVGPathElement>(svg, "bug-path");

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.set(bug, { autoAlpha: 1 })
    .set(shield, { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%" })
    .set(q("[data-part=bar]"), { scaleX: 0, transformOrigin: "0% 50%" })
    .set(q("[data-part=check]"), { scale: 0, transformOrigin: "50% 50%" })
    .set(q("[data-part=tick]"), { drawSVG: "0%" })
    .set(q("[data-part=ring], [data-part=spark]"), { opacity: 0 })
    .set(q("[data-part=bug-label], [data-part=fix-label]"), { autoAlpha: 0 });

  // Heartbeat keeps running for the whole scene.
  const pulse = gsap
    .timeline({ repeat: 3 })
    .fromTo(
      q("[data-part=pulse]"),
      { drawSVG: "0% 0%" },
      { drawSVG: "0% 100%", duration: 1.1, ease: "none" },
    )
    .to(q("[data-part=pulse]"), {
      drawSVG: "100% 100%",
      duration: 0.9,
      ease: "none",
    });
  tl.add(pulse, 0);

  // The bug crawls in.
  tl.to(
    bug,
    {
      motionPath: {
        path: bugPath,
        align: bugPath,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 2.2,
      ease: "power1.inOut",
    },
    0.2,
  ).to(
    q("[data-part=legs]"),
    {
      scaleY: 0.6,
      transformOrigin: "50% 50%",
      duration: 0.1,
      yoyo: true,
      repeat: 21,
      ease: "sine.inOut",
    },
    0.2,
  );

  // ...and breaks the page.
  tl.to(
    blocks,
    {
      rotation: () => gsap.utils.random(-9, 9),
      x: () => gsap.utils.random(-12, 12),
      y: () => gsap.utils.random(-6, 10),
      transformOrigin: "50% 50%",
      duration: 0.45,
      ease: "back.out(3)",
      stagger: 0.04,
    },
    1.9,
  )
    .to(hero, { fill: PALETTE.steel, duration: 0.3 }, 1.9)
    .to(
      q("[data-part=window]"),
      { x: 5, duration: 0.05, repeat: 9, yoyo: true },
      2,
    );

  // Call out what is happening.
  tl.fromTo(
    q("[data-part=bug-label]"),
    { autoAlpha: 0, y: 6 },
    { autoAlpha: 1, y: 0, duration: 0.3 },
    1.9,
  )
    .to(q("[data-part=bug-label]"), { autoAlpha: 0, duration: 0.2 }, 2.9)
    .fromTo(
      q("[data-part=fix-label]"),
      { autoAlpha: 0, y: 6 },
      { autoAlpha: 1, y: 0, duration: 0.3, immediateRender: false },
      2.9,
    )
    .to(q("[data-part=fix-label]"), { autoAlpha: 0, duration: 0.3 }, 4);

  // The shield squashes the bug.
  tl.to(
    shield,
    { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(2.2)" },
    2.6,
  )
    .fromTo(
      q("[data-part=ring]"),
      {
        opacity: 1,
        scale: 0.4,
        transformOrigin: "50% 50%",
      },
      { opacity: 0, scale: 3.2, duration: 0.8, immediateRender: false },
      3,
    )
    .to(bug, { scale: 0, autoAlpha: 0, duration: 0.25, ease: "power2.in" }, 3)
    .fromTo(
      q("[data-part=spark]"),
      { x: 0, y: 0, opacity: 1 },
      {
        x: (_: number, el: Element) => Math.cos(angleOf(el)) * SPARK_DISTANCE,
        y: (_: number, el: Element) => Math.sin(angleOf(el)) * SPARK_DISTANCE,
        opacity: 0,
        duration: 0.6,
        immediateRender: false,
      },
      3,
    );

  // The page snaps back into place.
  tl.to(
    blocks,
    {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.45)",
      stagger: 0.03,
    },
    3.3,
  )
    .to(hero, { fill: PALETTE.tungsten, duration: 0.4 }, 3.4)
    .to(
      shield,
      {
        scale: 0.3,
        autoAlpha: 0,
        x: "+=200",
        y: "-=60",
        duration: 0.6,
        ease: "power2.in",
      },
      3.9,
    );

  // Each check fills its bar and gets a tick.
  rows.forEach((row, index) => {
    const at = 4.3 + index * 0.6;
    const r = gsap.utils.selector(row);
    tl.fromTo(
      r("[data-part=icon]"),
      { scale: 1, transformOrigin: "50% 50%" },
      { scale: 1.15, duration: 0.15, yoyo: true, repeat: 1 },
      at,
    )
      .to(
        r("[data-part=bar]"),
        { scaleX: 1, duration: 0.5, ease: "power1.inOut" },
        at,
      )
      .to(
        r("[data-part=check]"),
        { scale: 1, duration: 0.4, ease: "back.out(3)" },
        at + 0.45,
      )
      .to(r("[data-part=tick]"), { drawSVG: "100%", duration: 0.3 }, at + 0.6);
  });

  // Clear the checklist so the loop starts again.
  tl.to(
    q("[data-part=check]"),
    { scale: 0, duration: 0.3, ease: "power2.in", stagger: 0.08 },
    7.3,
  ).to(
    q("[data-part=bar]"),
    { scaleX: 0, duration: 0.3, ease: "power2.in", stagger: 0.08 },
    7.3,
  );

  return tl;
};

function angleOf(el: Element) {
  return (Number(el.getAttribute("data-angle")) * Math.PI) / 180;
}
