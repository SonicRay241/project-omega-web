import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatStrNumber(str: string) {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}