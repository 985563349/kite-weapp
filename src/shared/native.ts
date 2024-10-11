let systemInfo: WechatMiniprogram.SystemInfo;

export function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync();
  }

  return systemInfo;
}

export function getBoundingClientRect(context: WechatMiniprogram.Component.TrivialInstance, selector: string) {
  return new Promise<WechatMiniprogram.BoundingClientRectCallbackResult>((resolve) => {
    wx.createSelectorQuery()
      .in(context)
      .select(selector)
      .boundingClientRect()
      .exec((rect = []) => resolve(rect[0]));
  });
}
