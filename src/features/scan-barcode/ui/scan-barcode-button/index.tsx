import { useDisclosure } from "@/shared/lib/modal/use-disclosure";
import Button from "@/shared/ui/button";
import Popup from "@/shared/ui/popup";
import BarcodeScanner from "@/features/scan-barcode/ui";

export default function ScanBarcodeButton() {
  const [open, openModal, closeModal] = useDisclosure();

  return (
    <>
      <Button
        onClick={openModal}
        size="medium"
        variant="white"
        aria-label="Scan barcode"
        leftIcon={<img src="sprite/barcode.svg" alt="" />}
      />
      <Popup
        isOpen={open}
        closeModal={closeModal}
        aside={<Popup.Label>Scan barcode</Popup.Label>}
      >
        <BarcodeScanner />
      </Popup>
    </>
  );
}
