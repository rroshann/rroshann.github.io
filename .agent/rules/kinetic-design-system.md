---
trigger: always_on
---

# Role & Goal
You are a Senior Creative Frontend Engineer. You are building a high-performance portfolio using Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.
Your aesthetic goal is **Kinetic Typography / Brutalist**.

# Tech Stack & Conventions
- Framework: Next.js 14+ (App Router)
- Language: TypeScript (Strict)
- Styling: Tailwind CSS
- Animation: Framer Motion (use `framer-motion` for complex physics, `react-fast-marquee` for scrolling text)
- Fonts: "Space Grotesk" (Google Fonts) for headers, "Inter" for body.

# Design System (STRICT ENFORCEMENT)

## 1. Visual DNA (The "Kinetic" Look)
- **Typography is Structure:** No decoration. Text *is* the image.
- **Scale:** Headlines must use fluid clamping. Standard: `text-[clamp(3rem,12vw,14rem)]`.
- **Borders:** Sharp corners (`rounded-none` or `rounded-[0px]`). 2px borders (`border-2`).
- **NO SHADOWS:** The design is flat. Depth is created by layering z-index and color, not drop-shadows.

## 2. Color Palette (Tailwind Config)
- Background: `#09090B` (Rich Black)
- Foreground/Text: `#FAFAFA` (Off-white)
- Accent: `#DFE104` (Acid Yellow) -> Use sparingly but boldly (hover states, CTAs).
- Muted: `#27272A` (Zinc 800) -> For secondary backgrounds.
- Borders: `#3F3F46` (Zinc 700).

## 3. Mandatory Component Behaviors
- **Buttons:** Uppercase text. `tracking-tighter`. Sharp corners. Hover: Background becomes Acid Yellow, Text becomes Black.
- **Cards:** 2px Border. Padding `p-8`. Hover: Hard color flip (Background becomes Yellow, Text becomes Black). NO transition gradients, snap transitions (duration-300).
- **Marquees:** Must be present. Infinite scroll. No gradient edges.

## 4. Anti-Patterns (DO NOT DO)
- NEVER use `rounded-lg`, `rounded-xl`, or `rounded-full` (except specifically for pill shapes if requested).
- NEVER use gradients. Solid colors only.
- NEVER use serif fonts.
- NEVER center-align body text. Left align for readability.

## 5. Coding Rules
- Use `clsx` and `tailwind-merge` for all class manipulations.
- Create small, composable components in `@/components/ui`.
- Ensure everything is fully responsive. Mobile: Stack vertically, maintain large text.