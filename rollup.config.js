import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";
import terser from "@rollup/plugin-terser";

// 导出一个数组，该数组里面是一个一个的对象
// 每一个对象就是一个打包任务
export default [
  {
    // 打包组件的任务
    input: "packages/components/index.ts", // 打包入口
    // 打包的输出
    output: {
      dir: "dist/components",
      format: "esm",
    },
    // 外部依赖，这一部分依赖不需要进行打包
    external: ["vue"],
    // 指定要使用的插件，注意插件是有顺序
    plugins: [
      del({ targets: "dist/components" }), // 先把上一次的打包内容删除掉
      vue({
        include: ["**/*.vue"],
      }),
      typescript({
        tsconfig: "tsconfig.app.json",
        compilerOptions: {
          allowImportingTsExtensions: false // 直接禁用该特性
        }
      }),
      terser(),
      copy({
        targets: [
          { src: "packages/components/package.json", dest: "dist/components" },
        ],
      }),
    ],
  },
  {
    // 打包样式的任务
    input: "packages/theme-chalk/src/index.scss",
    output: {
      file: "dist/theme-chalk/index.css",
      format: "esm",
    },
    plugins: [
      del({
        targets: "dist/theme-chalk",
      }),
      postcss({
        extract: true, // 单独生成一个 css 文件
        minimize: true, // 压缩
      }),
      copy({
        targets: [
          {
            src: "packages/theme-chalk/package.json",
            dest: "dist/theme-chalk",
          }
        ],
      }),
    ],
  },
];

