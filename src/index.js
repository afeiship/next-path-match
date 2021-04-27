(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var pathToRegexp = require('path-to-regexp');
  var defaults = { replacements: [['?', '\\?']], completion: 'both' };
  var cache = {};
  var COMPLETION_MAP = {
    left: ['(.*)', ''],
    both: ['(.*)', '(.*)'],
    right: ['', '(.*)'],
    none: ['', '']
  };


  nx.pathMatch = function (inRoute, inPath, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var pathname = inPath || global.location.pathname;
    var completions = COMPLETION_MAP[options.completion];
    var route = completions[0] + inRoute + completions[1];
    defaults.replacements.forEach(function (replacement) {
      route = route.replace(replacement[0], replacement[1]);
    });

    var matcher = (cache[route] = cache[route] || pathToRegexp.match(route));
    const matched = matcher(pathname);
    return matched ? matched.params : null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pathMatch;
  }
})();
