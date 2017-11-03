module.exports = ({ file }) => ({
  plugins: {
    'postcss-import': {
      root: file.dirname
    },
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%', 'iOS >= 10.0', 'not ie <= 11']
    },
    'postcss-reporter': {
      clearReportedMessages: true,
      throwError: false
    }
  }
});
