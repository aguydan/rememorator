import Button from "@/shared/ui/button";
import SignInForm from "@/widgets/auth/ui/signin-form";
import { useDisclosure } from "@/shared/lib/modal/use-disclosure";
import Popup from "@/shared/ui/popup";

export default function SignInButton() {
  const [open, openModal, closeModal] = useDisclosure();

  return (
    <>
      <Button variant="dark" onClick={openModal}>
        sign in
      </Button>
      <Popup
        isOpen={open}
        closeModal={closeModal}
        aside={<Popup.Label>Join Rememorator</Popup.Label>}
      >
        <SignInForm />
      </Popup>
    </>
  );
}
