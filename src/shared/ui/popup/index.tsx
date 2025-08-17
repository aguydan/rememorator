import type { PropsWithChildren, ReactNode } from "react";
import type { ModalProps } from "@/shared/ui/modal";
import Modal from "@/shared/ui/modal";
import { twMerge } from "tailwind-merge";

interface PopupProps extends ModalProps {
  aside?: ReactNode;
  closeModal: () => void;
}

Popup.Label = PopupLabel;

export default function Popup({
  aside = null,
  closeModal,
  children,
  className,
  ...props
}: PropsWithChildren<PopupProps>) {
  return (
    <Modal onClick={closeModal} {...props}>
      <div
        role="dialog"
        onClick={(e) => e.stopPropagation()}
        className={twMerge(
          "absolute top-[50%] left-[50%] z-50 grid w-[min(48rem,_96%)] -translate-[50%] grid-cols-1 gap-8 rounded-3xl bg-white p-4 pb-8 shadow-xs sm:grid-cols-[34%_1fr] sm:p-8 dark:bg-gray-700",
          className,
        )}
      >
        <div className="flex gap-2 sm:flex-col sm:justify-between sm:gap-3">
          {aside}
          <span
            style={{ writingMode: "sideways-lr" }}
            aria-hidden="true"
            className="font-heading mt-20 hidden text-8xl/10 text-gray-200 sm:block dark:text-gray-900"
          >
            memo
          </span>
        </div>
        {children}
      </div>
    </Modal>
  );
}

function PopupLabel({ children }: PropsWithChildren) {
  return <label className="btn-large btn-light">{children}</label>;
}

// close popup button
