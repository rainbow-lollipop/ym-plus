import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../src/button.vue';

describe("测试 button 组件", () => {
  it("渲染按钮有 default type", () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain("ym-button");
    expect(wrapper.classes()).toContain("ym-button-default");
  })

  it("渲染按钮有正确的属性", () => {
    const wrapper = mount(Button, {
      props: {
        type: "success"
      }
    });
    expect(wrapper.classes()).toContain("ym-button");
    expect(wrapper.classes()).toContain("ym-button-success");
  })

  it("渲染 plain 按钮", () => {
    const wrapper = mount(Button, {
      props: {
        plain: true
      }
    });
    expect(wrapper.classes()).toContain("is-plain");
  })

  it("渲染 disabled 按钮", () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    });
    expect(wrapper.classes()).toContain("is-disabled");
    expect(wrapper.attributes()).toHaveProperty("disabled");
  })

  it("测试插槽", () => {
    const wrapper = mount(Button, {
      slots: {
        default: '插槽文本'
      }
    });
    expect(wrapper.text()).toContain("插槽文本");
  })

  it("测试点击事件", async () => {
    const wrapper = mount(Button);
    await wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  })
})