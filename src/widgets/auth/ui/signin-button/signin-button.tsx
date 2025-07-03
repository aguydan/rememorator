import Button from "@/shared/ui/button/button";
import { createPortal } from "react-dom";
import SignInForm from "@/widgets/auth/ui/signin-form";
import { useDisclosure } from "@/shared/lib/modal/use-disclosure/use-disclosure";

export default function SignInButton() {
  const [open, openModal, closeModal] = useDisclosure();

  return (
    <>
      <Button variant="dark" onClick={openModal}>
        sign in
      </Button>
      {open &&
        createPortal(<SignInForm handleClick={closeModal} />, document.body)}
    </>
  );
}
