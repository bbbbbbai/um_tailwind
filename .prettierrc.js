const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
};
