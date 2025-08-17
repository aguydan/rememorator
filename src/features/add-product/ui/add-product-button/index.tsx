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
        variant="white"
        onClick={openModal}
      >
        add product
      </Button>
      <Popup
        isOpen={open}
        closeModal={closeModal}
        aside={
          <>
            <Button size="large" className="bg-gray-200">
              Find item
            </Button>
            <Button size="large" variant="accent-1">
              Add new
            </Button>
          </>
        }
      >
        <form></form>
      </Popup>
    </>
  );
}
