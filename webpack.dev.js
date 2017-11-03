const merge = require('webpack-merge');
const common = require('./webpack.common');
const DashboardPlugin = require('webpack-dashboard/plugin');

common.plugins.push(new DashboardPlugin());

module.exports = merge(common, {
  devServer: {
    open: false,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  devtool: 'source-map'
});
