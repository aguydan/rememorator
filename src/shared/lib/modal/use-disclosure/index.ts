import { useState } from "react";

export function useDisclosure() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);

    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpen(false);

    document.body.style.overflow = "auto";
  };

  return [open, openModal, closeModal] as const;
}
