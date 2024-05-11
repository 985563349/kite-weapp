Component({
  data: {
    visible: false,
    customVisible: false,
  },

  methods: {
    onClickFade() {
      this.setData({ visible: true });
      setTimeout(() => {
        this.setData({ visible: false });
      }, 500);
    },

    onClickCustom() {
      this.setData({ customVisible: true });
      setTimeout(() => {
        this.setData({ customVisible: false });
      }, 1000);
    },

    onBeforeEnter() {
      console.log('before enter');
    },

    onEnter() {
      console.log('enter');
    },

    onAfterEnter() {
      console.log('after enter');
    },

    onBeforeLeave() {
      console.log('before leave');
    },

    onLeave() {
      console.log('leave');
    },

    onAfterLeave() {
      console.log('after leave');
    },
  },
});
