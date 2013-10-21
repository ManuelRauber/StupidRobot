(function () {
	"use strict";

	Crafty.scene(StupidRobot.Scenes.Editor, function() {
		Crafty.background("url('/assets/Game/Images/Backgrounds/editor_Background.png')");

		var windowWidth = StupidRobot.Game.width;
		var windowHeight = StupidRobot.Game.height;
		
		/*
		Crafty.e('2D, DOM, Image')
			.attr({ w: windowWidth, h: windowHeight })
			.css({
				'background-image': 'url("/assets/Game/Images/Backgrounds/editor_Background.png")',
				'background-repeat': 'no-repeat',
				'background-size': '100% 100%',
			});
			*/

		Crafty.e('2D, Canvas, Grid')
			.Grid( (windowWidth / 2), (windowHeight / 2), null, null, 20);
		
		var manageBar = document.getElementById('editor_manageBar').winControl;
		var editBar = document.getElementById('editor_editBar').winControl;
		manageBar.show();
		editBar.show();
	});

})();