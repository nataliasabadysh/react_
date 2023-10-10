module.exports = {
  parserOptions: {
    project: "“e2e/tsconfig.json",
    //   “project”: [“tsconfig.json”, “e2e/tsconfig.json”],
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  extends: ["prettier"],
};
