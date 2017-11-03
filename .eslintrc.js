module.exports = {
  extends: ['prettier'],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    'prettier/prettier': 'error'
  },
  plugins: ['prettier']
};
