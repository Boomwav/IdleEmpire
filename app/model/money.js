(function() {
  'use strict';

  angular
    .module('IdleEmpire.model')
    .factory('money', money);

  function money() {
    var service = {
      moneyAmount : 0,
      addMoney    : addMoney
    };
    return service;

    ////////////////

    function addMoney(amountToAdd) {
      return service.moneyAmount += amountToAdd;
    }
  }
})();
