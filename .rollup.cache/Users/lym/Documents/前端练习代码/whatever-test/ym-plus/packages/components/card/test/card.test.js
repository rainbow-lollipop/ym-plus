import { describe, it, expect } from 'vitest';
import { mount } from "@vue/test-utils";
import Card from '../src/card.vue';
const imgSrc = "https://abc.com";
describe("测试卡片组件", () => {
    it("测试宽度属性", () => {
        const wrapper = mount(Card, {
            props: {
                width: 300,
                imgSrc
            }
        });
        expect(wrapper.attributes("style")).toContain("width: 300px;");
    });
    it("测试图片属性", () => {
        const wrapper = mount(Card, {
            props: {
                width: 300,
                imgSrc
            }
        });
        expect(wrapper.find(".ym-card-img img").attributes("src")).toBe(imgSrc);
    });
    it("测试高度属性", () => {
        const wrapper = mount(Card, {
            props: {
                imgHeight: 300,
                imgSrc
            }
        });
        expect(wrapper.find(".ym-card-img img").attributes("style")).toContain("height: 300px;");
    });
    it("测试概要属性", () => {
        const summary = 'summary';
        const wrapper = mount(Card, {
            props: {
                summary,
                imgSrc
            }
        });
        expect(wrapper.find(".ym-card-summary").text()).toBe(summary);
    });
    it("测试summary插槽", () => {
        const summary = 'summary';
        const wrapper = mount(Card, {
            props: { imgSrc },
            slots: {
                default: summary
            }
        });
        expect(wrapper.find(".ym-card-summary").text()).toBe(summary);
    });
});
//# sourceMappingURL=card.test.js.map