/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  extends: ['./react.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: '18',
    },
  },
}
