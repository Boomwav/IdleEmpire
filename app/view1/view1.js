
(function(){
	'use strict';

	angular
		.module('IdleEmpire.view1', ['ngRoute', 'IdleEmpire.model'])
  	.config(RouteConfig)
  	.controller('View1Ctrl', View1Ctrl);

	View1Ctrl.$inject = ['game'];
  RouteConfig.$inject = ['$routeProvider'];

	function View1Ctrl(game) {
		/* jshint validthis: true */
		var vm = this;

		vm.game = game;

		vm.ControllerNo = 1;

		vm.getMoney = function() {
			game.money.addMoney(1);
		}
	}

	function RouteConfig($routeProvider) {
		$routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
		    controller: 'View1Ctrl',
		    controllerAs: 'vm'
		});
	}
})();