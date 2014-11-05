(function(){
	'use strict';

	angular
		.module('IdleEmpire.view2', ['ngRoute'])
  	.config(RouteConfig)
  	.controller('View2Ctrl', View2Ctrl);

  RouteConfig.$inject = ['$routeProvider'];

	function View2Ctrl() {
	    /* jshint validthis: true */
	    var vm = this;
	    
	    vm.ControllerNo = 2;
	}

	function RouteConfig($routeProvider) {
		$routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
		    controller: 'View2Ctrl',
		    controllerAs: 'vm'
	  	});
	}
})();