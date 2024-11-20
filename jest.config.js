module.exports = {
  // 匹配测试文件的模式，支持 .spec.ts, .test.ts, .spec.tsx, .test.tsx 等文件
  testMatch: ['**/?(*.)(spec|test).ts?(x)'],

  // 在测试环境设置后执行的文件，这里用于引入测试的初始化配置
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],

  // 项目的根目录，默认为空字符串，表示当前目录
  rootDir: '',

  // 使用 @swc/jest 作为 TypeScript 和 TSX 文件的转换器
  transform: {
    '.(ts|tsx)': '@swc/jest',
  },

  // 模块名称映射，用于简化模块导入路径
  moduleNameMapper: {
    '^@utils(.*)$': '<rootDir>/src/utils$1',
  },

  // 覆盖率阈值设置，要求全局范围内的分支覆盖率至少为 50%，
  // 函数、行和语句的覆盖率至少为 95%
  coverageThreshold: {
    // global: {
    //   branches: 50,
    //   functions: 95,
    //   lines: 95,
    //   statements: 95,
    // },
  },

  // 是否在所有测试文件改变时重新运行所有测试
  watchAll: false,

  // 是否收集测试覆盖率信息
  collectCoverage: true,

  // 指定生成的覆盖率报告的目录
  coverageDirectory: './docs/jest-coverage',

  // 忽略收集覆盖率的文件路径模式
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],

  // 支持的模块文件扩展名
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
};
