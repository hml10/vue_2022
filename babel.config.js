module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 需要修改
    ['@babel/preset-env', { modules: false }],
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};
