module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
      'unit-allowed-list': ['em', 'rem', 'px', '%', 'vh', 'vw', 's', 'deg', 'rad'],
      'no-empty-source': null,
      'at-rule-no-unknown': [true, {
        'ignoreAtRules': [
          'extends',
          'include',
          'mixin',
          'each',
          'function',
          'for',
          'return',
          'if',
        ],
      }],
      'no-descending-specificity': null,
    },
  }
