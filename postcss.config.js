module.exports = {
  plugins: {
    'postcss-import': {},
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
  },
};
