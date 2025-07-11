import { useDisclosure } from "@/shared/lib/modal/use-disclosure";
import Button from "@/shared/ui/button";
import Popup from "@/shared/ui/popup";

export default function AddProductButton() {
  const [open, openModal, closeModal] = useDisclosure();

  return (
    <>
      <Button
        className="font-normal justify-center"
        size="medium"
        onClick={openModal}
      >
        add product
      </Button>
      <Popup
        isOpen={open}
        closeModal={closeModal}
        aside={
          <>
            <Button size="large">Find item</Button>
            <Button size="large">Add new</Button>
          </>
        }
      >
        <form></form>
      </Popup>
    </>
  );
}
