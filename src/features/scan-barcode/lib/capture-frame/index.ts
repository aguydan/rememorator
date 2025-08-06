export default async function captureFrame(video: HTMLVideoElement) {
  const { videoWidth: width, videoHeight: height } = video;

  const context = new OffscreenCanvas(width, height).getContext(
    "2d",
  ) as OffscreenCanvasRenderingContext2D;

  context.drawImage(video, 0, 0, width, height);
  const data = context.getImageData(0, 0, width, height);

  return data;
}
