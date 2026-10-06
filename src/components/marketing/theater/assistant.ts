import { gsap } from "gsap";
import { PALETTE } from "./palette";
import type { SceneBuilder } from "./types";

const THREAD_SCROLL = -90;

// A robot assistant answers visitors at night and during the day, while the
// sky turns from night to day and back.
export const assistantScene: SceneBuilder = (svg) => {
  const q = gsap.utils.selector(svg);
  const thread = q("[data-part=thread]");
  const questions = q("[data-part=question]");
  const typings = q("[data-part=typing]");
  const answers = q("[data-part=answer]");
  const eyes = q("[data-part=eyes]");
  const antenna = q("[data-part=antenna]");
  const orbit = q("[data-part=orbit]")[0];
  const orbitOrigin = `${orbit.dataset.orbitX} ${orbit.dataset.orbitY}`;

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.set(thread, { y: 0 })
    .set([...questions, ...typings, ...answers], { autoAlpha: 0 })
    .set(orbit, { rotation: 0, svgOrigin: orbitOrigin });

  // The robot blinks now and then.
  [1.6, 4.4, 7.8].forEach((at) => {
    tl.fromTo(
      eyes,
      { scaleY: 1, transformOrigin: "50% 50%" },
      { scaleY: 0.1, duration: 0.08, yoyo: true, repeat: 1, ease: "none" },
      at,
    );
  });

  // Two conversations: one at night, one during the day.
  const talk = (index: number, at: number) => {
    const lines = gsap.utils.selector(answers[index])("[data-part=line]");
    const dots = gsap.utils.selector(typings[index])("[data-part=dot]");
    tl.fromTo(
      questions[index],
      { autoAlpha: 0, y: 14, scale: 0.9, transformOrigin: "100% 100%" },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(2)" },
      at,
    )
      // The robot thinks.
      .to(eyes, { y: -2, duration: 0.2 }, at + 0.5)
      .fromTo(
        antenna,
        { scale: 1, transformOrigin: "50% 50%" },
        {
          scale: 1.6,
          duration: 0.2,
          yoyo: true,
          repeat: 3,
          ease: "sine.inOut",
        },
        at + 0.5,
      )
      .to(typings[index], { autoAlpha: 1, duration: 0.2 }, at + 0.6)
      .fromTo(
        dots,
        { y: 0 },
        {
          y: -5,
          duration: 0.18,
          yoyo: true,
          repeat: 5,
          ease: "sine.inOut",
          stagger: 0.1,
        },
        at + 0.6,
      )
      .to(typings[index], { autoAlpha: 0, duration: 0.15 }, at + 1.8)
      .to(eyes, { y: 0, duration: 0.2 }, at + 1.8)
      // ...and answers.
      .fromTo(
        answers[index],
        { autoAlpha: 0, scale: 0.9, transformOrigin: "0% 100%" },
        { autoAlpha: 1, scale: 1, duration: 0.4, ease: "back.out(2)" },
        at + 1.85,
      )
      .from(
        lines,
        { attr: { width: 0 }, duration: 0.45, ease: "none", stagger: 0.4 },
        at + 2,
      );
  };

  talk(0, 0.3);

  // Night turns into day.
  tl.to(
    orbit,
    {
      rotation: 180,
      svgOrigin: orbitOrigin,
      duration: 1.4,
      ease: "power2.inOut",
    },
    3.4,
  )
    .to(
      q("[data-part=sky]"),
      {
        keyframes: { fill: [PALETTE.night, PALETTE.tungsten, PALETTE.daySky] },
        duration: 1.4,
        ease: "power2.inOut",
      },
      3.4,
    )
    .to(q("[data-part=stars]"), { autoAlpha: 0, duration: 0.6 }, 3.4)
    .to(
      q("[data-part=house-window]"),
      { fill: PALETTE.white, duration: 0.6 },
      3.9,
    )
    .to(thread, { y: THREAD_SCROLL, duration: 0.6, ease: "power2.inOut" }, 4.9);

  talk(1, 5);

  tl.addLabel("payoff", 8.4);

  // Day turns into night, and the chat clears.
  tl.to(
    orbit,
    {
      rotation: 360,
      svgOrigin: orbitOrigin,
      duration: 1.4,
      ease: "power2.inOut",
    },
    8.6,
  )
    .to(
      q("[data-part=sky]"),
      {
        keyframes: { fill: [PALETTE.daySky, PALETTE.tungsten, PALETTE.night] },
        duration: 1.4,
        ease: "power2.inOut",
      },
      8.6,
    )
    .to(q("[data-part=stars]"), { autoAlpha: 1, duration: 0.6 }, 9.3)
    .to(
      q("[data-part=house-window]"),
      { fill: PALETTE.tungsten, duration: 0.6 },
      9.3,
    )
    .to([...questions, ...answers], { autoAlpha: 0, duration: 0.4 }, 9.4)
    .set(thread, { y: 0 }, 9.8)
    .to({}, { duration: 0.2 });

  return tl;
};
