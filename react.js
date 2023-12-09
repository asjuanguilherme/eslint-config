/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  extends: ['./base.js', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': 'error',
    'react/no-unknown-property': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-no-undef': 'warn',
    'react/no-array-index-key': 'error',
    'react/no-deprecated': 'error',
    'react/no-multi-comp': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-handler-names': 'warn',
    'react/jsx-key': 'error',
    'react/no-unsafe': 'warn',
    'react/no-unused-state': 'warn',
  },
  settings: {
    react: {
      version: '18',
    },
  },
}
