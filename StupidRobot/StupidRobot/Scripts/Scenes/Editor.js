(function() {
	"use strict";

	Crafty.scene(StupidRobot.Scenes.Editor, function () {
		var editor = Crafty.e('2D, Canvas, Editor');

		//Crafty.background("url('/assets/Game/Images/Backgrounds/EditorBackground.png')");

		//Editor Top Menu Bar
		WinJS.Utilities.query('#createMap')
			.listen('click', function () {
				document.getElementById('newFlyout').winControl.hide();
				Crafty.trigger('CreateMap', {
					mapname: document.getElementById('newName'),
					mapsize: document.getElementsByName('mapsize')
				});
			});

		//Editor Bottom Menu Bar
		//Enttiy Selection in List
		WinJS.Utilities.query('#basicListView')
			.listen('click', function () {
				document.getElementById('entitiesFlyout').winControl.hide();
				var entity = document.getElementById('basicListView').winControl.currentItem;
				document.getElementById('currentEntity').src = StupidRobot.Editor.Entities.getItem(entity.index).data['picture'];
				Crafty.trigger('EntitySelected', StupidRobot.Editor.Entities.getItem(entity.index));
				console.log(StupidRobot.Editor.SelectedEntity);
			});

		//Theme Change
		WinJS.Utilities.query('#forest')
			.listen('click', function () {
			document.getElementById('changeFlyout').winControl.hide();
			Crafty.trigger('ThemeChange', document.getElementsByName('forest'));
		});
		WinJS.Utilities.query('#dungeon')
			.listen('click', function () {
				document.getElementById('changeFlyout').winControl.hide();
				Crafty.trigger('ThemeChange', document.getElementsByName('dungeon'));
			});
		WinJS.Utilities.query('#space')
			.listen('click', function () {
				document.getElementById('changeFlyout').winControl.hide();
				Crafty.trigger('ThemeChange', document.getElementsByName('space'));
			});
		WinJS.Utilities.query('#desert')
			.listen('click', function () {
				document.getElementById('changeFlyout').winControl.hide();
				Crafty.trigger('ThemeChange', document.getElementsByName('desert'));
			});
		

		var manageBar = document.getElementById('EditorManageBar').winControl;
		var editBar = document.getElementById('EditorEditBar').winControl;
		manageBar.show();
		editBar.show();
	});
})();