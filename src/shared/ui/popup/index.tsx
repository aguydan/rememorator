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
          "absolute grid grid-cols-1 sm:grid-cols-[34%_1fr] gap-8 p-4 pb-8 sm:p-8 w-[min(48rem,_96%)] bg-white z-50 top-[50%] left-[50%] -translate-[50%] rounded-3xl shadow-xs",
          className,
        )}
      >
        <div className="flex sm:flex-col gap-2 sm:gap-3 sm:justify-between">
          {aside}
          <span
            style={{ writingMode: "sideways-lr" }}
            aria-hidden="true"
            className="hidden sm:block mt-20 font-heading text-gray-200 text-8xl/10"
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
  return (
    <label className="font-medium text-lg sm:text-xl text-left px-5 pt-2 pb-2 sm:pt-18 sm:pb-4 rounded-xl bg-gray-200 text-gray-700">
      {children}
    </label>
  );
}

// close popup button
