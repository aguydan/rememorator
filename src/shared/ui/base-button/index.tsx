import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "regular" | "medium" | "large";
  variant?: "light" | "dark" | "accent-1" | "accent-2";
}

const classes = {
  regular: "text-xl px-5 py-2 rounded-2xl",
  medium: "font-medium text-xl xl:text-2xl px-6 py-4 rounded-2xl",
  large: "font-medium text-xl px-5 pt-18 pb-4 rounded-xl",
  light: "bg-gray-200 hover:bg-gray-100",
  dark: "bg-gray-700 text-white hover:bg-gray-500",
  "accent-1": "bg-blue-300 text-white hover:bg-blue-200",
  "accent-2": "bg-red-300 text-white hover:bg-red-200",
};

export default function BaseButton({
  size = "regular",
  variant = "light",
  children,
  className,
  ...props
}: BaseButtonProps) {
  return (
    <button
      className={twMerge(
        classes[size],
        classes[variant],
        "cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
