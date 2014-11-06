'use strict';

describe('In IdleEmpire.view1 module...', function() {

  beforeEach(module('IdleEmpire.view1'));

  describe('View1 Controller', function(){

    it('should exist', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

    describe('as View1Ctrl', function(){

      var view1Ctrl;

      beforeEach(inject(function($controller) {
        view1Ctrl = $controller('View1Ctrl');
      }));

      it('should have a ControllerNo equal to 1', function() {
        expect(view1Ctrl.ControllerNo).toBe(1);
      });
    });
  });
});