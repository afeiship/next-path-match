const nx = require('@feizheng/next-js-core2');
require('../src/next-path-match');

describe('api.basic test', () => {
  test('nx.pathMatch should matched an object', function() {
    var res1 = nx.pathMatch(
      '/dashboard/self-analysis/:type/:id',
      '/dashboard/self-analysis/folder/13'
    );
    var res2 = nx.pathMatch(
      '/dashboard/self-analysis/:type/:id',
      '/dashboard/self-analysis/dashboard/113'
    );
    expect(res1).toEqual({ type: 'folder', id: '13' });
    expect(res2).toEqual({ type: 'dashboard', id: '113' });
  });

  test('nx.pathMatch when error should return null', function() {
    var res = nx.pathMatch('/dashboard/self-analysis/:type/:id', '/dashboard/self-ana/folder/13');
    expect(res).toBeNull();
  });
});
