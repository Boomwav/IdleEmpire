(function(){
	'use strict';

	// Declare app level module which depends on views, and components
	angular
		.module('IdleEmpire', [
		  'ngRoute',
		  'IdleEmpire.view1',
		  'IdleEmpire.view2',
		  'IdleEmpire.version'])
    .config(RouteConfig);

	RouteConfig.$inject('$routeProvider');

	function RouteConfig($routeProvider){
		$routeProvider.otherwise({redirectTo: '/view1'});
	}

})();

