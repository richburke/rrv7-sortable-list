import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isMatchForId<T>(targetId: T) {
  return function(test: { id: T }) {
    return targetId === test.id;
  }
}

export function getById<T>(a: {id: T}[]) {
  return function(id: T): {id: T} | undefined {
    return a.find(obj => obj.id === id)
  }
}
