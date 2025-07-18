import { forwardRef, type InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelHidden?: boolean;
  errors?: string[];
  variant?: "filled" | "empty";
}

const classes = {
  filled: "px-5 bg-gray-100 rounded-2xl",
  empty: "border-b-black border-b",
};

// extract animations into an external object or something
// delete astro component input
// add empty variant (or just see if it actually works)

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      required,
      label,
      errors,
      labelHidden = false,
      variant = "filled",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <label className="flex flex-col gap-2">
        <div className="flex gap-2">
          <span
            className={twMerge(
              "font-secondary pl-6 text-gray-500",
              labelHidden && "hidden",
              errors && "text-red-400",
            )}
          >
            {label}
          </span>
          <span className="text-red-500">{required && "*"}</span>
        </div>
        <input
          ref={ref}
          required={required}
          className={twMerge(
            "text-xl py-3 transition-all outline-3 outline-transparent -outline-offset-4 focus-visible:outline-offset-0 focus-visible:outline-gray-400 w-[min(20rem,_100%)]",
            classes[variant],
            errors && "outline-offset-0 outline-red-400",
            className,
          )}
          {...props}
        />
        {errors &&
          errors.map((error, index) => (
            <span key={index} className="text-red-400">
              {error}
            </span>
          ))}
      </label>
    );
  },
);

export default Input;
