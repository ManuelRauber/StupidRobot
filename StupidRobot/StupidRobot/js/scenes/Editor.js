(function () {
	"use strict";

	Crafty.scene(StupidRobot.Scenes.Editor, function() {
		Crafty.background('green');

		var width = StupidRobot.Game.width;
		var height = StupidRobot.Game.height;


		Crafty.e('2D, Canvas, Grid')
			.Grid(0, 0, 50, 50, 20);
			
	
	});
})();