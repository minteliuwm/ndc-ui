module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['component', {
      'libraryName': 'ndc-custom-ui',
      'libDir': 'lib'
    }]
  ]
};
