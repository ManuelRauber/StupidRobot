(function () {
	"use strict";

	Crafty.scene(StupidRobot.Scenes.AppStart, function() {
		Crafty.background('black');

		Crafty.e('2D,Canvas,Text')
			.text('Initialize Loading')
			.attr({
				w: StupidRobot.Game.width,
				x: 0,
				y: StupidRobot.Game.height / 2 - 25
			});

		Crafty.e('2D,Canvas,ProgressBar')
			.ProgressBar();


		var loadArray = [];
		StupidRobot.Editor.AllAssets['forest'].forEach(function (entity) {
			loadArray.push(entity['picture']);
		});
		StupidRobot.Editor.AllAssets['desert'].forEach(function (entity) {
			loadArray.push(entity['picture']);
		});
		StupidRobot.Editor.AllAssets['dungeon'].forEach(function (entity) {
			loadArray.push(entity['picture']);
		});

		Crafty.load(loadArray,
			//on load finish
			function() {
				Crafty.scene(StupidRobot.Scenes.MainMenu);
			},
			//on progress
			function(e) {
				Crafty.trigger('update', e.percent - 100);
			},
			//on error
			function(e) {

			});
	});
})();