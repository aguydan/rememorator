import Button from "@/shared/ui/button";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { readBarcodes } from "zxing-wasm/reader";
import useVideoStream from "@/features/scan-barcode/lib/use-video-stream";
import useInterval from "@/features/scan-barcode/lib/use-interval";
import useCameraDevices from "@/features/scan-barcode/lib/use-camera-devices";
import captureFrame from "@/features/scan-barcode/lib/capture-frame";

export default function BarcodeScanner() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [devices, streamRef] = useCameraDevices();
  const [streaming, startStream, handleCanPlay] = useVideoStream(
    streamRef,
    videoRef,
  );

  useInterval(streaming, async () => {
    if (!videoRef.current) return;

    try {
      const data = await captureFrame(videoRef.current);

      const readResults = await readBarcodes(data, {
        formats: ["EAN-13"],
        tryHarder: true,
      });

      if (readResults.length) {
        console.log(readResults[0].text);
      }
    } catch (error) {
      console.error("An error has occurred: " + error);
    }
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <video
        className={twMerge("rounded-2xl hidden", streaming && "block")}
        onCanPlay={handleCanPlay}
        ref={videoRef}
      />
      {devices && devices.length ? (
        <div className="flex flex-col items-center gap-3">
          <span className="font-secondary text-lg">Select camera</span>
          <div className="flex gap-3">
            {devices.map((device, index) => (
              <Button
                className="font-bold"
                key={index}
                onClick={() => startStream(device.deviceId)}
                variant="accent-1"
              >
                {index}
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <span className="font-secondary text-lg text-center">
          Video devices were not found
        </span>
      )}
    </div>
  );
}
