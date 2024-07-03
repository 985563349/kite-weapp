import KComponent from '../shared/component';

KComponent({
  externalClasses: ['k-spinner-class', 'k-label-class'],

  properties: {
    kId: String,

    style: String,

    type: String,

    size: String,

    vertical: Boolean,

    label: String,

    ariaRole: String,

    ariaLabel: String,
  },
});
