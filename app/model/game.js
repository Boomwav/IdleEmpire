(function() {
    'use strict';

    angular
        .module('IdleEmpire.model', [])
        .factory('game', game);

    game.$inject = ['money'];

    function game(money) {

        var service = {
            money : money,
            earnMoney : earnMoney
        };
        return service;

        ////////////////

        function earnMoney() {
            money.addMoney(1);
        }
    }
})();