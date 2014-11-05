'use strict';

describe('IdleEmpire.view1 module', function() {

  beforeEach(module('IdleEmpire.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();

      it('should have a ControllerNo equal to 1', function() {
        expect(view1Ctrl.ControllerNo).toBe(1);
      });

    }));

    describe('View1Ctrl...', function(){

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