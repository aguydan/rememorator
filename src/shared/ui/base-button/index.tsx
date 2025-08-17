import type { ButtonHTMLAttributes, ElementType } from "react";
import { twMerge } from "tailwind-merge";

export interface BaseButtonProps<E extends ElementType = ElementType>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "regular" | "medium" | "large";
  variant?:
    | "light"
    | "dark"
    | "accent-1"
    | "accent-2"
    | "white"
    | "transparent";
  as?: E;
}

const classes = {
  regular: "text-lg sm:text-xl px-5 py-2 rounded-2xl",
  medium: "font-medium text-xl xl:text-2xl px-6 py-4 rounded-2xl",
  large: "btn-large",
  light: "btn-light",
  dark: "bg-gray-900 text-white",
  "accent-1": "bg-blue-200 text-white dark:bg-blue-400",
  "accent-2": "bg-red-500 text-white",
  white: "bg-white",
  transparent: "text-gray-400 hover:bg-gray-200",
};

export default function BaseButton({
  size = "regular",
  variant = "light",
  as,
  children,
  className,
  ...props
}: BaseButtonProps) {
  const Element = as || "button";

  return (
    <Element
      className={twMerge(
        classes[size],
        classes[variant],
        "cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}
