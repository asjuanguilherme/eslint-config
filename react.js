/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  extends: ['./base.js', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': 'error',
    'react/no-array-index-key': 'error',
    'react/no-deprecated': 'error',
    'react/no-multi-comp': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-key': 'error',
    'react/prop-types': 'warn',
    'react/jsx-no-undef': 'warn',
    'react/no-unknown-property': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/no-unsafe': 'warn',
    'react/no-unused-state': 'warn',
    'no-useless-catch': 'warn',
  },
  settings: {
    react: {
      version: '18',
    },
  },
}
