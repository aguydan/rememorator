import { createPortal } from "react-dom";
import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
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
        style={
          {
            "--scroll-y": window.scrollY + "px",
          } as CSSProperties
        }
        className={twMerge(
          "absolute top-[var(--scroll-y)] z-200 h-[100vh] w-[100vw] backdrop-blur-xl",
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
