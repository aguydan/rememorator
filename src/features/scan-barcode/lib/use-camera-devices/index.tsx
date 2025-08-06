import { useEffect, useRef, useState } from "react";

export default function useCameraDevices() {
  const [devices, setDevices] = useState<MediaDeviceInfo[] | null>(null);

  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    initializeDevices();
  }, []);

  const initializeDevices = async () => {
    try {
      const status = await navigator.permissions.query({ name: "camera" });

      if (status.state !== "granted") {
        streamRef.current = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        for (const track of streamRef.current.getTracks()) {
          track.stop();
        }
      }

      const devices = await navigator.mediaDevices.enumerateDevices();

      setDevices(devices.filter((device) => device.kind === "videoinput"));
    } catch (error) {
      console.error("An error has occurred: " + error);
    }
  };

  return [devices, streamRef] as const;
}
