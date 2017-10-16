const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  devServer: {
    open: false,
    overlay: {
      warnings: true,
      errors: true
    }
  }
});
