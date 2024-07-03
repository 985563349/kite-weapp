function KComponent<
  Data extends WechatMiniprogram.Component.DataOption,
  Props extends WechatMiniprogram.Component.PropertyOption,
  Methods extends WechatMiniprogram.Component.MethodOption,
>(options: WechatMiniprogram.Component.Options<Data, Props, Methods>): void {
  options.externalClasses ??= [];
  options.externalClasses.push('k-class');

  options.options = {
    multipleSlots: true,
    addGlobalClass: true,
    virtualHost: true,
  };

  Component(options);
}

export default KComponent;
