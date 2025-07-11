import { twMerge } from "tailwind-merge";
import type { BaseButtonProps } from "@/shared/ui/base-button";
import BaseButton from "@/shared/ui/base-button";

interface CircleButtonProps extends BaseButtonProps {}

const classes = {
  regular: "w-12 h-12 text-xl",
  medium: "font-medium w-18 h-18 text-4xl",
  large: "",
};

export default function CircleButton({
  children,
  className,
  size = "regular",
  ...props
}: CircleButtonProps) {
  return (
    <BaseButton
      className={twMerge(
        "rounded-full flex items-center justify-center",
        classes[size],
        className,
      )}
      {...props}
    >
      {children}
    </BaseButton>
  );
}
