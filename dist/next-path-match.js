/*!
 * name: @feizheng/next-path-match
 * url: https://github.com/afeiship/next-path-match
 * version: 1.0.0
 * date: 2019-12-03T10:22:59.868Z
 * license: MIT
 */

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

//# sourceMappingURL=next-path-match.js.map
