import KComponent from '../shared/component';

KComponent({
  externalClasses: ['k-spinner-class', 'k-label-class'],

  properties: {
    type: String,

    style: String,

    vertical: Boolean,

    label: String,

    ariaRole: String,

    ariaLabel: String,
  },
});
