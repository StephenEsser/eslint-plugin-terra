const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/no-inline-styles');

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('no-inline-styles', rule, {
  valid: [
    { code: '<div />;' },
    { code: '<div className="bar"></div>;' },
  ],
  invalid: [{
    code: '<div style={{ height: "100px" }}></div>;',
    errors: [{ message: 'Unexpected use of inline styles' }],
  }],
});
