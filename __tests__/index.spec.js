(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.pathMatch should matched an object', function () {
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

    test('nx.pathMatch when error should return null', function () {
      var res = nx.pathMatch('/dashboard/self-analysis/:type/:id', '/dashboard/self-ana/folder/13');
      expect(res).toBeNull();
    });

    test("star and ? path example", ()=>{
      var res = nx.pathMatch(
        '/content/course\\?businessConfigUuid=:uuid&bizType=independent(.*)',
        '/content/course?businessConfigUuid=train-ear&bizType=independent&course=3e58d4456cea3b325b555f0333cf4e17&contentSelectedKey=d0364cbf879b24f5c98a700b460039cb&subject=english'
      );
      expect(res.uuid).toBe('train-ear');
    })
  });
})();
