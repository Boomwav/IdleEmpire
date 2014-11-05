// Game
angular
    .module('idleEmpire.model')
    .factory('Game', Game);

function Game() {

	var someValue = 'Awesome!';
	
	var game = {
		save: save,
		someValue: someValue,
		validate: validate
	};

	return game;

	////////////

	function save() {

	};

	function validate {

	};
}