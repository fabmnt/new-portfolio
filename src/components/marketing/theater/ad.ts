import { gsap } from "gsap";
import { PALETTE } from "./palette";

/** When the hook card leaves the screen and the scene starts playing. */
export const HOOK_EXIT = 1.8;
const CLAIM_HOLD = 2.3;

/**
 * Opens the ad: the visitor's problem pops in word by word, then the card
 * slides up to reveal the scene. Starts with the card covering the screen.
 */
export function hookCard(card: HTMLElement): gsap.core.Timeline {
  return gsap
    .timeline()
    .fromTo(card, { autoAlpha: 1, yPercent: 0 }, {
      yPercent: -100,
      duration: 0.55,
      ease: "power3.inOut",
    }, HOOK_EXIT)
    .set(card, { autoAlpha: 0 })
    .fromTo(
      card.querySelector("[data-ad-rule]"),
      { scaleX: 0, transformOrigin: "50% 50%" },
      { scaleX: 1, duration: 0.4, ease: "power2.out" },
      0.1,
    )
    .fromTo(
      card.querySelectorAll("[data-ad-word]"),
      { autoAlpha: 0, yPercent: 60 },
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.45,
        ease: "back.out(2)",
        stagger: 0.09,
      },
      0.2,
    );
}

/**
 * Closes the ad: the claim card wipes in over the finished scene, the
 * benefit gets highlighted and the card holds so it can be read.
 */
export function claimCard(card: HTMLElement): gsap.core.Timeline {
  return gsap
    .timeline()
    .fromTo(
      card,
      { autoAlpha: 1, clipPath: "inset(0% 100% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 0.55, ease: "power3.inOut" },
    )
    .fromTo(
      card.querySelectorAll("[data-ad-line]"),
      { autoAlpha: 0, y: 14 },
      { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.15 },
      0.3,
    )
    .fromTo(
      card.querySelectorAll("[data-ad-mark]"),
      { backgroundSize: "0% 100%", color: PALETTE.night },
      {
        backgroundSize: "100% 100%",
        color: PALETTE.tungsten,
        duration: 0.5,
        ease: "power2.inOut",
      },
      0.95,
    )
    .to({}, { duration: CLAIM_HOLD });
}
