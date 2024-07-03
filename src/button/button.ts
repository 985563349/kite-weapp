import KComponent from '../shared/component';

KComponent({
  externalClasses: ['hover-class', 'k-icon-class', 'k-loading-class'],

  properties: {
    kId: String,

    style: String,

    type: String,

    size: String,

    variant: String,

    disabled: Boolean,

    loading: Boolean,

    icon: String,

    shape: String,

    expand: String,

    formType: String,

    openType: String,

    hoverStopPropagation: Boolean,

    hoverStartTime: {
      type: Number,
      value: 20,
    },

    hoverStayTime: {
      type: Number,
      value: 70,
    },

    sessionFrom: String,

    sendMessageTitle: String,

    sendMessagePath: String,

    sendMessageImg: String,

    showMessageCard: Boolean,

    appParameter: String,

    phoneNumberNoQuotaToast: Boolean,

    lang: {
      type: String,
      value: 'en',
    },

    ariaLabel: String,
  },

  methods: {
    onTap(event: WechatMiniprogram.TouchEvent) {
      if (this.data.disabled || this.data.loading) {
        return;
      }

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
      event: WechatMiniprogram.CustomEvent<WechatMiniprogram.GeneralCallbackResult & { avatarUrl: string }>
    ) {
      this.triggerEvent('chooseavatar', event.detail);
    },

    agreeprivacyauthorization(event: any) {
      this.triggerEvent('agreeprivacyauthorization', event.detail);
    },
  },
});
