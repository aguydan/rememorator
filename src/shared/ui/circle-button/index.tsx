import { twMerge } from "tailwind-merge";
import type { BaseButtonProps } from "@/shared/ui/base-button";
import BaseButton from "@/shared/ui/base-button";

interface CircleButtonProps extends BaseButtonProps {}

export default function CircleButton({
  children,
  className,
  ...props
}: CircleButtonProps) {
  return (
    <BaseButton className={twMerge("rounded-full", className)} {...props}>
      {children}
    </BaseButton>
  );
}
