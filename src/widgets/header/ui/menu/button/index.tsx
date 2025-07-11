import CircleButton from "@/shared/ui/circle-button";
import HeaderMenu from "@/widgets/header/ui/menu";
import { useState } from "react";

export default function HeaderMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CircleButton
        className="my-4 w-14 h-14 relative"
        variant="accent-1"
        size="regular"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Header menu"
      >
        <span
          className="absolute w-2 h-2 rounded-full bg-white"
          aria-label="hidden"
        ></span>
        <span
          className="absolute w-2 h-2 rounded-full bg-white left-3"
          aria-label="hidden"
        ></span>
        <span
          className="absolute w-2 h-2 rounded-full bg-white right-3"
          aria-label="hidden"
        ></span>
      </CircleButton>
      <HeaderMenu className={open ? "flex" : "hidden"} />
    </>
  );
}
