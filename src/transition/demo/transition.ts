Component({
  data: {
    visible: false,
    rotateVisible: false,
  },

  methods: {
    onClickFade() {
      this.setData({ visible: true });
      setTimeout(() => {
        this.setData({ visible: false });
      }, 500);
    },

    onClickRotate() {
      this.setData({ rotateVisible: true });
      setTimeout(() => {
        this.setData({ rotateVisible: false });
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
