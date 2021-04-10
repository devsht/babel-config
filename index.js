module.exports = function () {
  return {
    plugins: [
      require('@babel/plugin-transform-runtime'),
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-proposal-object-rest-spread'),
      require('@babel/plugin-proposal-nullish-coalescing-operator'),
      require('@babel/plugin-proposal-optional-chaining'),
      require('babel-plugin-styled-components'),
    ],
    presets: [
      require('@babel/preset-env'),
      [require('@babel/preset-react'), { runtime: 'automatic' }],
      require('@babel/preset-typescript'),
    ],
  };
};