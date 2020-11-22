/*!
 * name: @jswork/next-path-match
 * description: A wrapper for path-to-regexp.
 * homepage: https://github.com/afeiship/next-path-match
 * version: 1.0.0
 * date: 2020-11-22 20:06:29
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var pathToRegexp = require('path-to-regexp');
  var cache = {};

  nx.pathMatch = function (inRoute, inPath) {
    var pathname = inPath || global.location.pathname;
    var matcher = (cache[inRoute] = cache[inRoute] || pathToRegexp.match(inRoute));
    const matched = matcher(pathname);
    return matched ? matched.params : null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pathMatch;
  }
})();
