(function() {
	"use strict";

	Crafty.scene(StupidRobot.Scenes.Editor, function () {
		var editor = Crafty.e('2D, Canvas, Editor');

		//Crafty.background("url('/assets/Game/Images/Backgrounds/EditorBackground.png')");

		//Editor Top Menu Bar
		WinJS.Utilities.query('#createMap')
			.listen('click', function () {
				document.getElementById('newFlyout').winControl.hide();

				//tell Scripts/Components/Editor.js that a new map wants to be born
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

				//replace the "currentEntity" Picture on the bottom left of the editor
				document.getElementById('currentEntity').src = StupidRobot.Editor.LoadedEntities.getItem(entity.index).data['picture'];

				//tell all the gridItems, which entity is currently selected, so they can be overwritten by it
				Crafty.trigger('EntitySelected', StupidRobot.Editor.LoadedEntities.getItem(entity.index));
			});


		//Change Theme Buttons
		WinJS.Utilities.query('.themeButtons')
			.listen('click', function (e) {
				document.getElementById('changeFlyout').winControl.hide();

				//change the entity theme in Scripts/Pages/Entities
				StupidRobot.Editor.ChangeTheme(e.target.title);

				//tell all the gridItems, that the theme of their entity has changed
				Crafty.trigger('ThemeChange', e.target.title);

				//update the entity listview in the editor
				var listview = document.getElementById('basicListView').winControl;
				listview.itemDataSource = StupidRobot.Editor.LoadedEntities.dataSource;
			});


    //undo
	  WinJS.Utilities.query('#undo')
      .listen('click', function () {
        StupidRobot.CommandManager.undoCommand();
      });


    //redo
	  WinJS.Utilities.query('#redo')
      .listen('click', function () {
        StupidRobot.CommandManager.redoCommand();
      });

	
		//show the top and bottom app bars
		var manageBar = document.getElementById('EditorManageBar').winControl;
		var editBar = document.getElementById('EditorEditBar').winControl;
		manageBar.show();
		editBar.show();
	});
})();