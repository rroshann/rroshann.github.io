/**
 * Shared motion tokens for the Kinetic Brutalist design system.
 * Change entrance speed here, not per-component.
 */

/** Ease-out-expo curve: fast start, crisp deceleration. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Entrance durations (seconds) by element scale. */
export const DUR = {
    /** labels, small rows */
    sm: 0.35,
    /** body copy, cards */
    md: 0.4,
    /** section titles, CTAs */
    lg: 0.45,
    /** hero headline */
    xl: 0.55,
} as const;

/** Per-item delay (seconds) for staggered list reveals. */
export const STAGGER = 0.06;
