/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  extends: ['./react.js'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: '18',
    },
  },
}
