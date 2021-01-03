module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            components: './components',
            screens: './screens',
            navigations: './navigations',
            assets: './assets/'
          },
        },
      ],
    ],
  };
};
