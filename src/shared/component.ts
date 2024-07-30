type DataOption = WechatMiniprogram.Component.DataOption;
type PropertyOption = WechatMiniprogram.Component.PropertyOption;
type MethodOption = WechatMiniprogram.Component.MethodOption;
type OtherOption = WechatMiniprogram.Component.OtherOption;
type Lifetimes = WechatMiniprogram.Component.Lifetimes;
type TrivialInstance = WechatMiniprogram.Component.TrivialInstance;

interface KComponentInstance {
  parent?: TrivialInstance;
  children?: TrivialInstance[];
}

type KComponentOptions<Data extends DataOption, Props extends PropertyOption, Methods extends MethodOption> = Partial<{
  data: Data;
  properties: Props;
  methods: Methods;
}> &
  Partial<OtherOption> &
  Partial<Lifetimes> &
  ThisType<
    KComponentInstance &
      WechatMiniprogram.Component.Instance<Data & Record<string, any>, Props, Methods> &
      Record<string, any>
  >;

function KComponent<Data extends DataOption, Props extends PropertyOption, Methods extends MethodOption>(
  options: KComponentOptions<Data, Props, Methods>
): void {
  options.options = {
    multipleSlots: true,
    addGlobalClass: true,
    virtualHost: true,
  };

  options.externalClasses ??= [];
  options.externalClasses.push('k-class');

  options.properties ??= {} as Props;
  Object.assign(options.properties, { kId: String, style: String });

  Component(options);
}

export default KComponent;
