import type { ExtractPropTypes } from "vue";

export const cardProps = {
  width: {
    type: Number,
    default: 0
  },
  imgSrc: {
    type: String,
    default: '',
    required: true
  },
  imgHeight: {
    type: Number,
    default: 0
  },
  summary: {
    type: String,
    default: ''
  }
};

export type CardProps = ExtractPropTypes<typeof cardProps>;