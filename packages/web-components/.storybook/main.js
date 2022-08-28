const { readdirSync } = require('fs');
const path = require('path');
const ResolveTypescriptPlugin = require('resolve-typescript-plugin');

const currentPath = path.resolve(__dirname);

module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/html',
  features: {
    babelModeV7: true,
    buildStoriesJson: true,
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    config.resolve.plugins = [new ResolveTypescriptPlugin()];
    config.module.rules.push(
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        sideEffects: true,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /.storybook\/preview.js/,
        resolve: { fullySpecified: false },
      },
    );

    // Webpack 5 asset/source
    config.module.rules.push({
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      type: 'asset/source',
    });

    return config;
  },
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
};
