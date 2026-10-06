import { gsap } from "gsap";
import type { SceneBuilder } from "./types";

const WIPE_LEFT = 84;
const WIPE_WIDTH = 472;
const KNOB_Y = 198;
const PLUS_SHIFT = 122;
const CURSOR_HOME = { x: 600, y: 350 };

// A cursor drags a before/after slider that turns an old site into a modern
// one, then opens a new page tab.
export const improveScene: SceneBuilder = (svg) => {
  const q = gsap.utils.selector(svg);
  const wipe = q("[data-part=wipe]");
  const handle = q("[data-part=handle]");
  const cursor = q("[data-part=cursor]");
  const newTab = q("[data-part=new-tab]");
  const plus = q("[data-part=plus]");

  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  tl.set(wipe, { attr: { width: 0 } })
    .set(handle, { autoAlpha: 1, x: WIPE_LEFT })
    .set(cursor, { autoAlpha: 1, ...CURSOR_HOME })
    .set(newTab, { autoAlpha: 0, scaleX: 0, transformOrigin: "0% 50%" })
    .set(plus, { x: 0 })
    .set(q("[data-part=before-label]"), { autoAlpha: 1 })
    .set(q("[data-part=after-label]"), { autoAlpha: 0 });

  // Grab the handle.
  tl.to(cursor, { x: WIPE_LEFT, y: KNOB_Y, duration: 0.9 }, 0.2).to(
    cursor,
    {
      scale: 0.85,
      duration: 0.12,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    },
    1.1,
  );

  // Drag it across: the new design replaces the old one.
  const drag = { duration: 2.2, ease: "power3.inOut" };
  tl.to(wipe, { attr: { width: WIPE_WIDTH }, ...drag }, 1.4)
    .to(handle, { x: WIPE_LEFT + WIPE_WIDTH, ...drag }, 1.4)
    .to(cursor, { x: WIPE_LEFT + WIPE_WIDTH, ...drag }, 1.4)
    .to(handle, { autoAlpha: 0, duration: 0.3 }, 3.7)
    .to(q("[data-part=after-label]"), { autoAlpha: 1, duration: 0.3 }, 2.5)
    .to(q("[data-part=before-label]"), { autoAlpha: 0, duration: 0.3 }, 3.4);

  // The new design shines.
  tl.fromTo(
    q("[data-part=sparkle]"),
    { opacity: 0, scale: 0, rotation: -45, transformOrigin: "50% 50%" },
    {
      opacity: 1,
      scale: 1,
      rotation: 45,
      duration: 0.35,
      ease: "back.out(3)",
      stagger: 0.15,
      yoyo: true,
      repeat: 1,
      repeatDelay: 0.2,
    },
    3.8,
  ).fromTo(
    q("[data-part=cta]"),
    { scale: 1, transformOrigin: "50% 50%" },
    { scale: 1.12, duration: 0.25, yoyo: true, repeat: 3, ease: "sine.inOut" },
    3.9,
  );

  // Open a new page.
  tl.to(cursor, { x: 282, y: 52, duration: 0.8 }, 4.9)
    .to(cursor, { scale: 0.85, duration: 0.1, yoyo: true, repeat: 1 }, 5.75)
    .to(
      newTab,
      { autoAlpha: 1, scaleX: 1, duration: 0.45, ease: "back.out(1.6)" },
      5.9,
    )
    .to(plus, { x: PLUS_SHIFT, duration: 0.45, ease: "back.out(1.6)" }, 5.9)
    .fromTo(
      q("[data-part=card]"),
      { y: 0 },
      {
        y: -10,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
        stagger: 0.1,
      },
      6.2,
    );

  // Back to the old site for the next loop.
  tl.to(q("[data-part=after-label]"), { autoAlpha: 0, duration: 0.3 }, 7.4).to(
    q("[data-part=before-label]"),
    { autoAlpha: 1, duration: 0.3 },
    7.7,
  );
  tl.to(cursor, { ...CURSOR_HOME, duration: 0.7 }, 7.1)
    .to(newTab, { autoAlpha: 0, scaleX: 0, duration: 0.35 }, 7.2)
    .to(plus, { x: 0, duration: 0.35 }, 7.2)
    .to(wipe, { attr: { width: 0 }, duration: 0.6, ease: "power2.in" }, 7.4);

  return tl;
};
