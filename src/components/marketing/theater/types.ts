import type { gsap } from "gsap";

/**
 * Builds one pass of a scene animation. The timeline must end in the same
 * state it starts from so the theater can loop it without a jump. Elements
 * are found inside `svg`, and any inline style it adds is reverted by the
 * theater when the scene changes.
 *
 * A `payoff` label marks when the work is done: the theater covers the scene
 * with its claim card from there, so whatever resets the scene afterwards
 * happens off screen.
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
