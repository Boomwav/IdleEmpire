
(function(){
	'use strict';

	angular
		.module('IdleEmpire.view1', ['ngRoute'])
  	.config(RouteConfig)
  	.controller('View1Ctrl', View1Ctrl);

  RouteConfig.$inject = ['$routeProvider'];

	function View1Ctrl() {
    /* jshint validthis: true */
    var vm = this;

    vm.ControllerNo = 1;
	}

	function RouteConfig($routeProvider) {
		$routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
		    controller: 'View1Ctrl',
		    controllerAs: 'vm'
	  	});
	}
})();