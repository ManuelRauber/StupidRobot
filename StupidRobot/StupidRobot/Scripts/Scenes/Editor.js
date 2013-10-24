(function() {
	"use strict";

	Crafty.scene(StupidRobot.Scenes.Editor, function () {
		var editor = Crafty.e('2D, Canvas, Editor');

		//Crafty.background("url('/assets/Game/Images/Backgrounds/EditorBackground.png')");

		WinJS.Utilities.query('#createMap')
			.listen('click', function () {
				document.getElementById('newFlyout').winControl.hide();
				Crafty.trigger('CreateMap', {
					mapname: document.getElementById('newName'),
					mapsize: document.getElementsByName('mapsize')
				});
			});

		var manageBar = document.getElementById('EditorManageBar').winControl;
		var editBar = document.getElementById('EditorEditBar').winControl;
		manageBar.show();
		editBar.show();
	});

})();