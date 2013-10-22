(function () {
	"use strict";

	var editorClass = WinJS.Class.define(
		function () {
			Crafty.scene(StupidRobot.Scenes.Editor, function () {
				Crafty.background("url('/assets/Game/Images/Backgrounds/EditorBackground.png')");

				var windowWidth = StupidRobot.Game.width;
				var windowHeight = StupidRobot.Game.height;

				Crafty.e('2D, Canvas, Grid')
					.Grid((windowWidth / 2), (windowHeight / 2), null, null, 20);

				var manageBar = document.getElementById('EditorManageBar').winControl;
				var editBar = document.getElementById('EditorEditBar').winControl;
				manageBar.show();
				editBar.show();
			});
		},
		null,
		{
		}
	);

	var editor = new editorClass();

	WinJS.Namespace.define('StupidRobot', {
		Editor: editor
	});
})();