export type FrameRequestCallback = () => void;

export function requestAnimationFrame(callback: FrameRequestCallback) {
  return setTimeout(callback, 1000 / 30);
}
