import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for composing Tailwind CSS classes.
 * Combines clsx for conditional classes with tailwind-merge to
 * intelligently resolve conflicting Tailwind utilities.
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-accent", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
