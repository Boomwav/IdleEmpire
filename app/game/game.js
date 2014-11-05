(function() {
    'use strict';

    angular
        .module('IdleEmpire.model')
        .factory('Game', Game);

    function Game() {
        var service = {
            save: save
        };
        return service;

        ////////////////

        function save() {
        	/* */
        }
    }
})();