import ToggleThemeButton from "@/features/theme-toggle/ui";
import CircleButton from "@/shared/ui/circle-button";
import SignInButton from "@/widgets/auth/ui/signin-button/signin-button";
import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderButtonsProps extends HTMLAttributes<HTMLDivElement> {}

export default function HeaderButtons({ className }: HeaderButtonsProps) {
  return (
    <div className={twMerge("flex gap-0 sm:gap-18 items-center", className)}>
      <CircleButton variant="light" aria-label="Select language">
        en
      </CircleButton>
      <ToggleThemeButton />
      <div className="flex gap-4">
        <SignInButton />
      </div>
    </div>
  );
}
