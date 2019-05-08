const domUtil = require('../utils/dom-util');

const meta = {
  docs: {
    description: 'Disallow inline styles',
    category: 'suggestion',
    recommended: true,
    url: 'https://github.com/StephenEsser/eslint-plugin-terra/tree/master/docs/rules/no-inline-styles.md',
  },
  schema: [],
};

function create(context) {
  return {
    JSXAttribute(node) {
      if (domUtil.isDOMComponent(node.parent) && node.name.name === 'style') {
        context.report({
          node,
          message: 'Unexpected use of inline styles',
          data: {
            name: node.name.name,
          },
        });
      }
    },
  };
}

module.exports = {
  meta,
  create,
};
