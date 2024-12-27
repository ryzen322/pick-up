import { clsx, type ClassValue } from "clsx";
import { formatDistanceToNow } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateToString(createdAt: Date): string {
  const date = formatDistanceToNow(createdAt!, { addSuffix: true });

  return date;
}
