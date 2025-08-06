import { useEffect, useState, type RefObject } from "react";

export default function useVideoStream(
  streamRef: RefObject<MediaStream | null>,
  videoRef: RefObject<HTMLVideoElement | null>,
) {
  const [streaming, setStreaming] = useState(false);

  useEffect(() => {
    return endStream;
  }, []);

  const startStream = async (id: string) => {
    endStream();

    try {
      streamRef.current = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: {
            exact: id,
          },
        },
      });
    } catch (error) {
      console.error("An error has occurred: " + error);
    }

    if (videoRef.current) {
      videoRef.current.srcObject = streamRef.current;
      videoRef.current.play();
    }
  };

  const endStream = () => {
    setStreaming(false);

    if (streamRef.current) {
      for (const track of streamRef.current.getTracks()) {
        track.stop();
      }
    }
  };

  const handleCanPlay = () => {
    setStreaming(true);
  };

  return [streaming, startStream, handleCanPlay] as const;
}
