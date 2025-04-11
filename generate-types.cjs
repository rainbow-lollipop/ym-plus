// 该文件的目的只有一个：生成类型声明文件的入口文件
const fs = require("fs");
const path = require("path");

// 定义组件和类型文件的目录路径

const componentsDir = path.resolve(
  __dirname,
  "dist",
  "components",
  "packages",
  "components"
);

const typesFile = path.resolve(
  __dirname,
  "dist",
  "components",
  "types.d.ts"
)

// 获取组件目录下面所有的子目录
const components = fs.readdirSync(componentsDir);

// 最终写入到 types.d.ts 的内容
let typesContent = 'import { Plugin } from "vue";\n\n';
typesContent += 'declare const ym: Plugin;\n';
typesContent += 'export default ym;\n';

// 为每个组件的类型声明文件生成一个 export 语句
// 并且添加到 typesContent 中

typesContent += components
  .map((component) => `export * from './packages/components/${component}';`)
  .join("\n");


fs.writeFileSync(typesFile, typesContent);

console.log("类型声明文件的入口文件已经生成完毕!")