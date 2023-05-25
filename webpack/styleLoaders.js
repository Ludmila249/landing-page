const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (isProduction) => {
  const loaders = [];

  if (isProduction) {
    loaders.push(MiniCssExtractPlugin.loader);
  } else {
    loaders.push('vue-style-loader');
  }

  loaders.push(
    {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'icss',
        },
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            ['postcss-preset-env'],
            [
              'postcss-pxtorem',
              {
                propList: [
                  '*',
                  '!border-left',
                  '!border-right',
                  '!border-top',
                  '!border-bottom',
                  '!border',
                  '!outline',
                ],
              },
            ],
          ],
        },
      },
    }
  );

  loaders.push('less-loader');

  return [
    {
      test: /\.less$/,
      use: loaders,
    },
  ];
};
