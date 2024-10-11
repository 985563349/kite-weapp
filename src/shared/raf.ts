export type FrameRequestCallback = (timestamp: number) => void;

export const frameDuration = 1000 / 30;

type QueueRecordRaw = {
  id: number;
  callback: FrameRequestCallback;
  cancelled: boolean;
};

const queue: QueueRecordRaw[] = [];

let id = 0;
let last = 0;

export function requestAnimationFrame(callback: FrameRequestCallback) {
  if (queue.length === 0) {
    const now = Date.now();
    const next = Math.max(0, frameDuration - (now - last));
    last = next + now;

    setTimeout(() => {
      const cp = queue.slice(0);
      queue.length = 0;

      for (let i = 0; i < cp.length; i++) {
        if (!cp[i].cancelled) {
          try {
            cp[i].callback(last);
          } catch (error) {
            setTimeout(() => {
              throw error;
            }, 0);
          }
        }
      }
    }, Math.round(next));
  }

  queue.push({
    id: ++id,
    callback,
    cancelled: false,
  });

  return id;
}

export function cancelAnimationFrame(id: number) {
  for (let i = 0; i < queue.length; i++) {
    if (queue[i].id === id) {
      queue[i].cancelled = true;
    }
  }
}
