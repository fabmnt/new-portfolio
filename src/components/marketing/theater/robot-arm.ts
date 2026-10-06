// Two-segment robot arm used by the automate scene.
export const ARM = {
  shoulder: { x: 320, y: 284 },
  upper: 140,
  fore: 130,
  rest: { x: 320, y: 140 },
} as const;

export interface Point {
  x: number;
  y: number;
}

/**
 * Finds where the elbow goes so the hand reaches `target` (inverse
 * kinematics). Targets out of reach are clamped to the arm's length, so the
 * returned hand can differ from `target`. The elbow always bends to the same
 * side, so the arm never flips while it moves.
 */
export function solveArm(target: Point): { elbow: Point; hand: Point } {
  const { shoulder, upper, fore } = ARM;
  const dx = target.x - shoulder.x;
  const dy = target.y - shoulder.y;
  const reach = Math.min(
    Math.max(Math.hypot(dx, dy), Math.abs(upper - fore) + 1),
    upper + fore - 1,
  );
  const direction = Math.atan2(dy, dx);
  const bend = Math.acos(
    (upper ** 2 + reach ** 2 - fore ** 2) / (2 * upper * reach),
  );
  const elbowAngle = direction + bend;

  return {
    elbow: {
      x: shoulder.x + upper * Math.cos(elbowAngle),
      y: shoulder.y + upper * Math.sin(elbowAngle),
    },
    hand: {
      x: shoulder.x + reach * Math.cos(direction),
      y: shoulder.y + reach * Math.sin(direction),
    },
  };
}
