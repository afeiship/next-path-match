(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var pathToRegexp = require('path-to-regexp');
  var cache = {};

  nx.pathMatch = function(inRoute, inPath) {
    var matcher = (cache[inRoute] = cache[inRoute] || pathToRegexp.match(inRoute));
    const matched = matcher(inPath);
    return matched ? matched.params : null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pathMatch;
  }
})();