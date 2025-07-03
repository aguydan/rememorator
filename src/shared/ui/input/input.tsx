import { forwardRef, type InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelHidden?: boolean;
  variant?: "filled" | "empty";
}

const classes = {
  filled: "px-5 bg-gray-100 rounded-2xl",
  empty: "border-b-black border-b",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, labelHidden = false, variant = "filled", className, ...props },
    ref,
  ) => {
    return (
      <label className="flex flex-col gap-2">
        <span
          className={twMerge(
            "font-secondary pl-6 text-gray-500",
            labelHidden && "hidden",
          )}
        >
          {label}
        </span>
        <input
          ref={ref}
          className={twMerge(
            "text-xl py-3 focus:outline-none",
            classes[variant],
            className,
          )}
          {...props}
        />
      </label>
    );
  },
);

export default Input;
