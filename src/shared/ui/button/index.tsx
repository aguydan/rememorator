import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import type { BaseButtonProps } from "@/shared/ui/base-button";
import BaseButton from "@/shared/ui/base-button";

interface ButtonProps extends BaseButtonProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function Button({
  leftIcon = null,
  rightIcon = null,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      className={twMerge("flex items-center gap-3", className)}
      {...props}
    >
      {leftIcon && (
        <div className="w-8 h-8 [img]:w-full [img]:h-full [img]:object-cover">
          {leftIcon}
        </div>
      )}
      {children}
      {rightIcon && (
        <div className="w-8 h-8 [img]:w-full [img]:h-full [img]:object-cover">
          {rightIcon}
        </div>
      )}
    </BaseButton>
  );
}
