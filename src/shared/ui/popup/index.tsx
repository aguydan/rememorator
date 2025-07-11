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
          "absolute grid grid-cols-1 sm:grid-cols-[34%_1fr] gap-8 p-8 w-[min(48rem,_96%)] bg-white z-50 top-[50%] left-[50%] -translate-[50%] rounded-3xl",
          className,
        )}
      >
        <div className="flex flex-col gap-3 justify-between">
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
    <label className="font-medium text-xl text-left px-5 pt-18 pb-4 rounded-xl bg-gray-200">
      {children}
    </label>
  );
}

// close popup button
