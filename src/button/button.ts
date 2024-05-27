import KComponent from '../common/component';

KComponent({
  externalClasses: ['hover-class'],

  properties: {
    kId: String,

    color: String,

    type: String,

    variant: String,

    size: String,

    style: String,

    expand: String,

    disabled: Boolean,

    loading: Boolean,

    icon: String,

    hoverStopPropagation: Boolean,

    hoverStartTime: {
      type: Number,
      value: 20,
    },

    hoverStayTime: {
      type: Number,
      value: 70,
    },

    lang: {
      type: String,
      value: 'en',
    },

    openType: String,

    shape: String,

    sessionFrom: String,

    sendMessageTitle: String,

    sendMessagePath: String,

    sendMessageImg: String,

    showMessageCard: Boolean,

    appParameter: String,

    phoneNumberNoQuotaToast: Boolean,

    ariaLabel: String,
  },

  methods: {
    onTap(event: WechatMiniprogram.TouchEvent) {
      if (this.data.disabled) return;
      this.triggerEvent('click', event);
    },

    getUserInfo(event: WechatMiniprogram.ButtonGetUserInfo) {
      this.triggerEvent('getuserinfo', event.detail);
    },

    contact(event: WechatMiniprogram.ButtonContact) {
      this.triggerEvent('contact', event.detail);
    },

    getPhoneNumber(event: WechatMiniprogram.ButtonGetPhoneNumber) {
      this.triggerEvent('getphonenumber', event.detail);
    },

    error(event: WechatMiniprogram.ButtonError) {
      this.triggerEvent('error', event.detail);
    },

    opensetting(event: WechatMiniprogram.ButtonOpenSetting) {
      this.triggerEvent('opensetting', event.detail);
    },

    launchapp(event: WechatMiniprogram.ButtonLaunchApp) {
      this.triggerEvent('launchapp', event.detail);
    },

    chooseavatar(
      event: WechatMiniprogram.CustomEvent<
        WechatMiniprogram.GeneralCallbackResult & { avatarUrl: string }
      >
    ) {
      this.triggerEvent('chooseavatar', event.detail);
    },

    agreeprivacyauthorization(event: any) {
      this.triggerEvent('agreeprivacyauthorization', event.detail);
    },
  },
});
