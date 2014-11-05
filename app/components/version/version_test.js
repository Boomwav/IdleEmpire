'use strict';

describe('IdleEmpire.version module', function() {
  beforeEach(module('IdleEmpire.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
