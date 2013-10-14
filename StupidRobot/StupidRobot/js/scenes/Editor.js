(function () {
	"use strict";

	Crafty.scene(StupidRobot.Scenes.Editor, function() {
		Crafty.background('green');

		var windowWidth = StupidRobot.Game.width;
		var windowHeight = StupidRobot.Game.height;

		Crafty.e('2D, Canvas, Grid')
			.Grid(0, 0, 50, 50, 20);
		
		Crafty.e('2D, Canvas, EditorTaskbar')
			.EditorTaskbar(windowWidth - 200, 0, 200, windowHeight);

			
	
	});
})();