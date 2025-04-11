import Button from './button/src/button.vue';
import Card from './card/src/card.vue';
// 之前是每个组件有一个入口文件，每个入口文件实际上就是给组件添加一个 install 方法
// 之后在其他项目中就可以单独引入这个组件
// 现在整体项目的入口文件要做的就是统一给所有组件加上 install
// 之后在其他项目中使用时，就可以一次性导入所有的组件
const components = [Button, Card];
const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};
const YmPlusPlugin = {
    install,
};
export default YmPlusPlugin;
//# sourceMappingURL=index.js.map