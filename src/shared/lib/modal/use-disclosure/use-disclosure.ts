import { useState } from "react";

export function useDisclosure() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);

    document.body.style.position = "fixed";
  };

  const closeModal = () => {
    setOpen(false);

    document.body.style.position = "static";
  };

  return [open, openModal, closeModal] as const;
}
