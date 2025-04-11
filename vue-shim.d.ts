// 该文件是类型声明文件，用于告诉ts如何处理.vue文件
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}