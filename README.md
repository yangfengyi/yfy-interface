## .swcrc 解释

$schema: 指定 JSON Schema，用于提供编辑器自动完成和验证。
jsc (JavaScript Compiler) 选项： a. parser:
syntax: "typescript": 使用 TypeScript 语法解析器。
tsx: true: 启用 TSX 支持。
decorators: true: 启用装饰器支持。
dynamicImport: true: 启用动态导入支持。
b. transform:
react: React 相关配置。
runtime: "automatic": 使用 React 的新 JSX 转换。
development: true: 启用开发时特性。
refresh: true: 启用 React Fast Refresh。
legacyDecorator: true: 使用旧版装饰器语法。
decoratorMetadata: true: 为装饰器生成元数据，用于反射。
c. target: "es2015": 编译目标为 ES2015（ES6）。 d. loose: false: 不使用 "loose" 模式，保持更严格的标准兼容性。 e. externalHelpers: false: 不使用外部 helpers，将 helpers 内联到代码中。 f. keepClassNames: true: 保留类名，有助于调试。
module 选项：
type: "es6": 使用 ES6 模块系统。
strict: false: 不启用严格模式。
strictMode: true: 在每个模块顶部添加 "use strict"。
lazy: false: 不使用懒加载。
noInterop: false: 生成 \_\_esModule 标志。
sourceMaps: true: 生成源映射，便于调试。
minify: false: 默认不压缩代码，通常在生产构建时才启用。
env: 配置目标环境和 polyfill。
targets: 指定目标浏览器。
mode: "usage": 只引入用到的 polyfill。
coreJs: 3: 使用 core-js 3 版本。
这个配置适用于现代的 TypeScript 和 React 项目，提供了良好的开发体验和性能优化。你可以根据具体项目需求调整这些选项。例如，在生产环境中，你可能想要启用 minify 选项。

## tsconfig 相关配置

- target: "ES2020" - 指定 ECMAScript 目标版本。
- module: "ESNext" - 指定生成的模块代码。
- lib: 指定要包含的库文件。
- jsx: "react-jsx" - 支持 React 17+ 的新 JSX 转换。
- strict: true - 启用所有严格类型检查选项。
- esModuleInterop: true - 启用 CommonJS 和 ES 模块之间的互操作性。
- skipLibCheck: true - 跳过声明文件的类型检查。
- forceConsistentCasingInFileNames: true - 禁止对同一文件的不一致引用。
- moduleResolution: "node" - 使用 Node.js 风格的模块解析。
- resolveJsonModule: true - 允许导入 .json 文件。
- isolatedModules: true - 确保每个文件都可以安全地进行单独编译。
- noEmit: true - 不生成输出文件。
- noUnusedLocals: true - 报告未使用的局部变量错误。
- noUnusedParameters: true - 报告未使用的参数错误。
- noImplicitReturns: true - 检查函数是否有隐式返回。
- allowSyntheticDefaultImports: true - 允许从没有默认导出的模块中默认导入。
- baseUrl: "." - 解析非相对模块名的基准目录。
- paths: 路径映射，这里设置了 "@/" 指向 "src/" 目录。
- include: 指定要包含的文件。
- exclude: 指定要排除的文件。

## React 状态相关处理

- 意外渲染处理 setState({})，状态本质上没有变化，但是组件重新渲染了

  - 有状态撕裂的情况下使用 jotai，很复杂的前端组件
  - Jotai 的原理就是 setState({})，因为在 js 当中 {} !== {}
  - {} === {} // false
  - Jotai 上来就会触发两次更新
  - Zustand 是组件外状态，也就是说 Zustand 依赖更新不依赖 React
  - jotai immer 和 useImmer 有一样的效果

- useImmer 对所有的引用值的 state 都使用 useImmer

  - [immer 的文档](https://immerjs.github.io/immer/zh-CN/installation)

- why-did-you-render 监控意外的渲染，在值未发生变化的情况下 {} -> {}

## Router Eslint webpack Jest 完善版本
