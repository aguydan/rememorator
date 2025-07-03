import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "regular" | "medium" | "big";
  circle?: boolean;
  variant?: "light" | "dark" | "blue" | "red";
}

const classes = {
  regular: {
    base: "text-xl px-5 py-2 rounded-2xl",
    circle: "text-xl w-12 h-12 rounded-full",
  },
  medium: {
    base: "font-medium text-xl xl:text-2xl px-6 py-4 rounded-2xl",
    circle: "font-medium w-18 h-18 rounded-full",
  },
  big: {
    base: "",
    circle: "",
  },
  light: "bg-gray-300 hover:bg-gray-100",
  dark: "bg-gray-700 text-white hover:bg-gray-500",
  blue: "bg-blue-300 text-white hover:bg-blue-100",
  red: "bg-red-300 text-white hover:bg-red-100",
};

export default function Button({
  size = "regular",
  circle = false,
  variant = "light",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        classes[size][circle ? "circle" : "base"],
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
