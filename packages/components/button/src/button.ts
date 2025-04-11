// 将props定义为 button 类型
// ExtractPropTypes 是vue3所提供的一个工具类型，用于从vue组件props对象中提取ts类型
import type { ExtractPropTypes } from 'vue'


// 用于定义 button 的 props 属性
export const buttonProps = {
  type: {
    type: String,
    default: 'default'
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;