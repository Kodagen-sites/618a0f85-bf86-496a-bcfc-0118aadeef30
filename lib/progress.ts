/**
 * Scroll-progress utilities for overlay timing.
 * Used by the ScrollCanvas hero so each overlay block fades in/out
 * over a precise progress range.
 */

/** Linear map of `t` (any scalar) into the [start, end] window, clamped to [0,1]. */
export function range(t: number, start: number, end: number): number {
  if (end <= start) return t >= end ? 1 : 0;
  const v = (t - start) / (end - start);
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

/** Smoothstepped variant of `range`. */
export function rangeSmooth(t: number, start: number, end: number): number {
  const x = range(t, start, end);
  return x * x * (3 - 2 * x);
}

/**
 * Triangular "block" — ramps up across [start, mid], holds, then ramps down across [mid, end].
 * Useful for full overlay sections that enter and leave.
 * `holdMargin` controls how much of the middle stays at 1.0 before fading down.
 */
export function block(
  t: number,
  start: number,
  end: number,
  holdMargin: number = 0.04
): number {
  const enterEnd = start + (end - start) * 0.35;
  const exitStart = end - holdMargin;
  if (t < start) return 0;
  if (t > end) return 0;
  if (t <= enterEnd) return range(t, start, enterEnd);
  if (t >= exitStart) return 1 - range(t, exitStart, end);
  return 1;
}
