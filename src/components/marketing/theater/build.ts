import { gsap } from "gsap";
import { scenePart, type SceneBuilder } from "./types";

const CART = { x: 490, y: 90 };
const ARC_TOP = 30;

// A blueprint draws itself, turns into a real online store, products fly to
// the cart and the site launches with a rocket and confetti.
export const buildScene: SceneBuilder = (svg) => {
  const q = gsap.utils.selector(svg);
  const grid = q("[data-part=grid]");
  const wire = q("[data-part=wire]");
  const frame = q("[data-part=frame]");
  const solids = q("[data-part=solid]");
  const badge = q("[data-part=badge]");
  const badgeCount = q("[data-part=badge-count]");
  const prices = Array.from(
    svg.querySelectorAll<SVGRectElement>("[data-part=price]"),
  );
  const rocket = q("[data-part=rocket]");
  const confetti = q("[data-part=confetti]");
  const steps = q("[data-part=step]");

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.set([grid, wire], { opacity: 1 })
    .set(q("[data-part=grid-line], [data-part=wire-line]"), { drawSVG: "0%" })
    .set([frame, ...solids], { autoAlpha: 0 })
    .set(badgeCount, { textContent: "0" })
    .set(confetti, { opacity: 0 })
    .set(steps, { autoAlpha: 0 })
    .set(steps[0], { autoAlpha: 1 });

  // Each phase shows its step label.
  [2.7, 4.3, 6.3].forEach((at, index) => {
    tl.to(steps[index], { autoAlpha: 0, duration: 0.2 }, at).to(
      steps[index + 1],
      { autoAlpha: 1, duration: 0.3 },
      at + 0.2,
    );
  });

  // Blueprint lines.
  tl.to(
    q("[data-part=grid-line]"),
    { drawSVG: "100%", duration: 0.5, stagger: 0.03, ease: "power1.inOut" },
    0.1,
  ).to(
    q("[data-part=wire-line]"),
    { drawSVG: "100%", duration: 0.6, stagger: 0.22, ease: "power1.inOut" },
    0.8,
  );

  // The blueprint becomes a real site.
  tl.to(grid, { opacity: 0, duration: 0.6 }, 2.7)
    .to(wire, { opacity: 0, duration: 0.4 }, 3)
    .fromTo(
      frame,
      { autoAlpha: 0, scale: 0.96, transformOrigin: "50% 50%" },
      { autoAlpha: 1, scale: 1, duration: 0.5 },
      2.7,
    )
    .fromTo(
      solids,
      { autoAlpha: 0, y: -24 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "back.out(2)", stagger: 0.15 },
      2.9,
    );

  // Each product flies to the cart.
  prices.forEach((price, index) => {
    const at = 4.3 + index * 0.55;
    const box = price.getBBox();
    const start = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
    const fly = q("[data-part=fly]")[index];
    tl.fromTo(
      price,
      { scale: 1, transformOrigin: "50% 50%" },
      { scale: 1.3, duration: 0.15, yoyo: true, repeat: 1 },
      at,
    )
      .set(fly, { autoAlpha: 1, ...start }, at + 0.1)
      .to(
        fly,
        {
          motionPath: {
            path: [start, { x: (start.x + CART.x) / 2, y: ARC_TOP }, CART],
            curviness: 1.25,
          },
          duration: 0.7,
          ease: "power1.inOut",
        },
        at + 0.1,
      )
      .set(fly, { autoAlpha: 0 }, at + 0.8)
      .set(badgeCount, { textContent: String(index + 1) }, at + 0.8)
      .fromTo(
        badge,
        { scale: 1, transformOrigin: "50% 50%" },
        { scale: 1.5, duration: 0.15, yoyo: true, repeat: 1 },
        at + 0.8,
      );
  });

  // Launch.
  const rocketPath = scenePart<SVGPathElement>(svg, "rocket-path");
  tl.set(rocket, { autoAlpha: 1 }, 6.3)
    .to(
      rocket,
      {
        motionPath: {
          path: rocketPath,
          align: rocketPath,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        duration: 1.5,
        ease: "power2.in",
      },
      6.3,
    )
    .fromTo(
      q("[data-part=flame]"),
      { scaleX: 1, transformOrigin: "100% 50%" },
      { scaleX: 1.6, duration: 0.08, yoyo: true, repeat: 17, ease: "none" },
      6.3,
    )
    .set(rocket, { autoAlpha: 0 }, 7.8)
    .fromTo(
      confetti,
      {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
      },
      {
        x: () => gsap.utils.random(-260, 260),
        y: () => gsap.utils.random(-170, -50),
        rotation: () => gsap.utils.random(-360, 360),
        duration: 0.7,
        ease: "power3.out",
        immediateRender: false,
      },
      6.6,
    )
    .to(
      confetti,
      {
        y: "+=200",
        rotation: "+=180",
        opacity: 0,
        duration: 1.1,
        ease: "power1.in",
      },
      7.3,
    );

  // Back to a blank screen.
  tl.to(steps[3], { autoAlpha: 0, duration: 0.3 }, 8.4);
  tl.to([frame, ...solids], { autoAlpha: 0, duration: 0.5 }, 8.4).to(
    {},
    { duration: 0.1 },
  );

  return tl;
};
