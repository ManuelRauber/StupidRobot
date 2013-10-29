﻿(function() {
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
				document.getElementById('currentEntity').src = StupidRobot.Editor.LoadedEntities.getItem(entity.index).data['picture'];
				Crafty.trigger('EntitySelected', StupidRobot.Editor.LoadedEntities.getItem(entity.index));
			});

		//Change Theme Buttons
		WinJS.Utilities.query('.themeButtons')
			.listen('click', function (e) {
				document.getElementById('changeFlyout').winControl.hide();
				StupidRobot.Editor.ChangeTheme(e.target.title);
				Crafty.trigger('ThemeChange', e.target.title);
				var listview = document.getElementById('basicListView').winControl;
				listview.itemDataSource = StupidRobot.Editor.LoadedEntities.dataSource;
			});
		
	
		var manageBar = document.getElementById('EditorManageBar').winControl;
		var editBar = document.getElementById('EditorEditBar').winControl;
		manageBar.show();
		editBar.show();
	});
})();