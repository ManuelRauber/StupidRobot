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


	var entities = WinJS.Class.define(
		null,
		{
			setEntities: function () {
				var dataArray = [
					{ title: "Basic banana", text: "Low-fat frozen yogurt", picture: "images/60banana.png" },
					{ title: "Banana blast", text: "Ice cream", picture: "images/60banana.png" },
					{ title: "Brilliant banana", text: "Frozen custard", picture: "images/60banana.png" },
					{ title: "Orange surprise", text: "Sherbet", picture: "images/60orange.png" },
					{ title: "Original orange", text: "Sherbet", picture: "images/60orange.png" },
					{ title: "Vanilla", text: "Ice cream", picture: "images/60vanilla.png" },
					{ title: "Very vanilla", text: "Frozen custard", picture: "images/60vanilla.png" },
					{ title: "Marvelous mint", text: "Gelato", picture: "images/60mint.png" },
					{ title: "Succulent strawberry", text: "Sorbet", picture: "images/60strawberry.png" }
				];
				this.itemList = new WinJS.Binding.List(dataArray);
			},

			PublicMembers: {
				get: function () {
					return this.itemList;
				}
			}
		}
	);

	var editorEntities = new entities();
	editorEntities.setEntities();
	

	WinJS.Namespace.define("StupidRobot.Editor", {
		Entities: {
			get: function () {
				return editorEntities.PublicMembers;
			}
		}
	});
})();