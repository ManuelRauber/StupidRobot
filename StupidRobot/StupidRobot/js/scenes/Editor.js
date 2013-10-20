(function () {
	"use strict";

	Crafty.scene(StupidRobot.Scenes.Editor, function() {
		Crafty.background('green');

		var windowWidth = StupidRobot.Game.width;
		var windowHeight = StupidRobot.Game.height;
		var appBar;

		Crafty.e('2D, Canvas, Grid')
			.Grid(0, 0, windowWidth - 200, windowHeight, 20);
		
		Crafty.e('2D, Canvas, EditorTaskbar')
			.EditorTaskbar(windowWidth - 200, 0, 200, windowHeight);

		appBar = document.getElementById('appbar').winControl;
		appBar.show();
	
	});
})();