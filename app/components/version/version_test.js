'use strict';

describe('morfo.version module', function() {
  beforeEach(module('morfo.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
