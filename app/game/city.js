/**
 * City Factory
 * @namespace Factories
 */
(function() {
    'use strict';

    angular
        .module('IdleEmpire.model')
        .factory('City', City);

    /**
     * @namespace City
     * @desc Model of a city
     * @memberOf Factories
     */
    function City() {
        var service = {
            save: save
        };
        return service;

        ////////////////

        /**
         * @name Save
         * @desc Persist the city
         * @param {String} Random parameter
         * @return {bool}
         * @memberOf Factories.City
         */
        function save() {
        	/* */
        }
    }
})();