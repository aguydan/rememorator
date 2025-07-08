import { createPortal } from "react-dom";
import type { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export default function Modal({
  isOpen,
  children,
  className,
  ...props
}: PropsWithChildren<ModalProps>) {
  return (
    isOpen &&
    createPortal(
      <div
        className={twMerge(
          "absolute top-0 w-[100vw] h-[100vh] z-10 backdrop-blur-xl",
          className,
        )}
        {...props}
      >
        {children}
      </div>,
      document.body,
    )
  );
}
