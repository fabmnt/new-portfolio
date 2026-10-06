import type { gsap } from "gsap";

/** Seconds the theater's claim card takes to fully cover a scene. */
export const CLAIM_WIPE = 0.45;

/**
 * Builds one pass of a scene animation. The timeline must end in the same
 * state it starts from so the theater can loop it without a jump. Elements
 * are found inside `svg`, and any inline style it adds is reverted by the
 * theater when the scene changes.
 *
 * A `payoff` label marks when the work is done: the theater wipes its claim
 * card over the scene from there. Anything that resets the scene must start
 * at least `CLAIM_WIPE` seconds after the payoff, once it is fully covered.
 */
export type SceneBuilder = (svg: SVGSVGElement) => gsap.core.Timeline;

/** Finds the element marked `data-part="<name>"` in a scene. Throws if missing. */
export function scenePart<T extends Element>(
  svg: SVGSVGElement,
  name: string,
): T {
  const element = svg.querySelector<T>(`[data-part="${name}"]`);
  if (!element) throw new Error(`Scene part "${name}" not found`);
  return element;
}
