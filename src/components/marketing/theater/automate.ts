import { gsap } from "gsap";
import { ARM, solveArm, type Point } from "./robot-arm";
import type { SceneBuilder } from "./types";

const PAPERS_PER_LOOP = 3;
const SCANNER: Point = { x: 320, y: 130 };
const SCAN_DISTANCE = 70;
const DOC_HALF_WIDTH = 28;
// The hand holds a paper this far above its top edge.
const GRIP_OFFSET = 10;
const DROP_X = 452;
const FINGER_TRAVEL = 5;
const CLOCK_TURNS = 4;
const STEAM_LOOP = 2.1;

// A robot arm picks papers from a pile, scans them and types each one into a
// spreadsheet row, while the clock spins and your coffee stays warm.
export const automateScene: SceneBuilder = (svg) => {
  const q = gsap.utils.selector(svg);
  const [upper, fore, elbowJoint, gripper, carryDoc, scan] = [
    "upper",
    "fore",
    "elbow",
    "gripper",
    "carry",
    "scan",
  ].map((part) => q(`[data-part=${part}]`)[0]);
  const pile = q("[data-part=pile-doc]");
  const scanLabel = q("[data-part=scan-label]");
  const rows = q("[data-part=sheet-row]");
  const fingerLeft = q("[data-part=finger-left]");
  const fingerRight = q("[data-part=finger-right]");

  // Tweened by the timeline; render() turns them into the arm's pose.
  const target: Point = { ...ARM.rest };
  const carrying = { on: 0 };

  const render = () => {
    const { elbow, hand } = solveArm(target);
    gsap.set(upper, { attr: { x2: elbow.x, y2: elbow.y } });
    gsap.set(fore, {
      attr: { x1: elbow.x, y1: elbow.y, x2: hand.x, y2: hand.y },
    });
    gsap.set(elbowJoint, { attr: { cx: elbow.x, cy: elbow.y } });
    gsap.set(gripper, { x: hand.x, y: hand.y });
    if (carrying.on) gsap.set(carryDoc, { x: hand.x, y: hand.y });
  };

  const tl = gsap.timeline({
    onUpdate: render,
    defaults: { ease: "power2.inOut" },
  });
  const moveTo = (point: Point, duration: number, at: number, ease?: string) =>
    tl.to(target, { ...point, duration, ease }, at);

  tl.set(target, { ...ARM.rest })
    .set(carrying, { on: 0 })
    .set(carryDoc, { autoAlpha: 0, scale: 1, transformOrigin: "50% 0%" })
    .set(pile, { autoAlpha: 1, y: 0 })
    .set(scan, { autoAlpha: 0 })
    .set(scanLabel, { autoAlpha: 0 })
    .set(q("[data-part=cell]"), { attr: { width: 0 } })
    .set(q("[data-part=row-check]"), { scale: 0, transformOrigin: "50% 50%" });

  for (let index = 0; index < PAPERS_PER_LOOP; index++) {
    const at = 0.3 + index * 2.5;
    const doc = pile[pile.length - 1 - index];
    const grab: Point = {
      x: Number(doc.dataset.x) + DOC_HALF_WIDTH,
      y: Number(doc.dataset.y) - GRIP_OFFSET,
    };
    const row = gsap.utils.selector(rows[index]);
    const rowTop = Number(row("[data-part=cell]")[0].getAttribute("y")) - 14;
    const drop: Point = { x: DROP_X, y: rowTop - GRIP_OFFSET };

    // Pick the top paper.
    moveTo({ x: grab.x, y: grab.y - 40 }, 0.45, at);
    moveTo(grab, 0.2, at + 0.45, "power1.in");
    tl.to(fingerLeft, { x: FINGER_TRAVEL, duration: 0.1 }, at + 0.65)
      .to(fingerRight, { x: -FINGER_TRAVEL, duration: 0.1 }, at + 0.65)
      .set(carrying, { on: 1 }, at + 0.75)
      .set(carryDoc, { autoAlpha: 1, scale: 1 }, at + 0.75)
      .set(doc, { autoAlpha: 0 }, at + 0.75);

    // Scan it.
    moveTo(SCANNER, 0.5, at + 0.8);
    tl.fromTo(
      scan,
      { y: 0, autoAlpha: 1 },
      {
        y: SCAN_DISTANCE,
        duration: 0.35,
        ease: "none",
        immediateRender: false,
      },
      at + 1.3,
    )
      .set(scan, { autoAlpha: 0 }, at + 1.65)
      .to(scanLabel, { autoAlpha: 1, duration: 0.2 }, at + 1.1)
      .to(scanLabel, { autoAlpha: 0, duration: 0.2 }, at + 1.9);

    // Type it into the next spreadsheet row.
    moveTo(drop, 0.45, at + 1.65);
    tl.to(
      carryDoc,
      { scale: 0, autoAlpha: 0, duration: 0.25, ease: "power2.in" },
      at + 2.1,
    )
      .set(carrying, { on: 0 }, at + 2.35)
      .to(
        row("[data-part=cell]"),
        {
          attr: {
            width: (_: number, el: Element) =>
              Number(el.getAttribute("data-width")),
          },
          duration: 0.25,
          ease: "power1.out",
          stagger: 0.08,
        },
        at + 2.15,
      )
      .to(
        row("[data-part=row-check]"),
        { scale: 1, duration: 0.3, ease: "back.out(3)" },
        at + 2.4,
      )
      .to(fingerLeft, { x: 0, duration: 0.1 }, at + 2.35)
      .to(fingerRight, { x: 0, duration: 0.1 }, at + 2.35);
  }

  // Rest, refill the pile and clear the sheet for the next loop.
  const end = 0.3 + PAPERS_PER_LOOP * 2.5;
  moveTo(ARM.rest, 0.6, end);
  tl.fromTo(
    pile.slice(-PAPERS_PER_LOOP),
    { autoAlpha: 0, y: -60 },
    { autoAlpha: 1, y: 0, duration: 0.5, ease: "bounce.out", stagger: 0.12 },
    end + 0.3,
  )
    .to(
      q("[data-part=row-check]"),
      { scale: 0, duration: 0.25, ease: "power2.in" },
      end + 0.4,
    )
    .to(
      q("[data-part=cell]"),
      { attr: { width: 0 }, duration: 0.3, ease: "power2.in" },
      end + 0.5,
    );

  // Background loops sized to the whole scene.
  const total = tl.duration();
  const origin = q("[data-part=clock]")[0].dataset.origin;
  tl.fromTo(
    q("[data-part=minute-hand]"),
    { rotation: 0 },
    {
      rotation: 360 * CLOCK_TURNS,
      svgOrigin: origin,
      duration: total,
      ease: "none",
    },
    0,
  ).fromTo(
    q("[data-part=hour-hand]"),
    { rotation: 0 },
    {
      rotation: (360 * CLOCK_TURNS) / 12,
      svgOrigin: origin,
      duration: total,
      ease: "none",
    },
    0,
  );
  tl.add(
    gsap.timeline({ repeat: Math.floor(total / STEAM_LOOP) - 1 }).fromTo(
      q("[data-part=steam]"),
      { y: 0, opacity: 0 },
      {
        keyframes: { opacity: [0, 1, 0], y: [0, -9, -18] },
        duration: 1.5,
        ease: "none",
        stagger: 0.3,
      },
    ),
    0,
  );

  render();
  return tl;
};
