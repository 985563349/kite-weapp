import KComponent from '../shared/component';
import transition from '../mixins/transition';

KComponent({
  externalClasses: [
    'enter-class',
    'enter-active-class',
    'enter-to-class',
    'leave-class',
    'leave-active-class',
    'leave-to-class',
  ],

  properties: {
    kId: String,

    style: String,
  },

  behaviors: [transition()],
});
