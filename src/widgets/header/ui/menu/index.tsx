import Button from "@/shared/ui/button";
import HeaderButtons from "@/widgets/header/ui/buttons";
import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderMenuProps extends HTMLAttributes<HTMLDivElement> {}

export default function HeaderMenu({ className }: HeaderMenuProps) {
  return (
    <div
      className={twMerge(
        "absolute -z-1 flex flex-col gap-6 -top-3 sm:top-0 -right-5 p-5 rounded-2xl shadow-sm bg-white w-[100vw] sm:w-[32rem]",
        className,
      )}
    >
      <HeaderButtons className="justify-between mt-18" />
      <div className="flex flex-col font-secondary font-medium">
        <Button variant="transparent">Profile</Button>
        <Button variant="transparent">Settings</Button>
        <Button
          variant="transparent"
          className="justify-between"
          rightIcon={
            <div className="bg-red-300 relative top-1  w-full h-6 rounded-lg"></div>
          }
        >
          Log out
        </Button>
      </div>
      <hr className="text-gray-200" />
      <nav className="flex flex-col font-secondary font-medium">
        <a href="/">
          <Button
            className="text-black justify-between"
            variant="transparent"
            as="div"
            rightIcon={
              <div className="bg-yellow-200 relative top-1 w-full h-6 rounded-lg"></div>
            }
          >
            Home
          </Button>
        </a>
        <a href="/fridge">
          <Button
            className="text-black justify-between"
            variant="transparent"
            as="div"
            rightIcon={
              <div className="bg-blue-400 relative top-1 w-full h-6 rounded-lg"></div>
            }
          >
            My fridge
          </Button>
        </a>
      </nav>
    </div>
  );
}
