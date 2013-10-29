(function() {
	"use strict";

	var entitiesClass = WinJS.Class.define(
		null,
		{
			init: function () {
				this.loadEntities('forest');
			},

			loadEntities: function (theme) {
				var themes = [];
				themes['forest'] = [
					{ title: "Robot", text: "east", theme: "grass", picture: "/Assets/Game/Images/robot-east.scale-100.png" },
					{ title: "Robot", text: "north", theme: "grass", picture: "/Assets/Game/Images/robot-north.scale-100.png" },
					{ title: "Robot", text: "west", theme: "grass", picture: "/Assets/Game/Images/robot-west.scale-100.png" },
					{ title: "Robot", text: "south", theme: "grass", picture: "/Assets/Game/Images/robot-south.scale-100.png" },
					{ title: "Rocket", text: "yipiiii", theme: "grass", picture: "/Assets/Game/Images/rocket.scale-100.png" },
					{ title: "Tree", text: "a nice tree", theme: "grass", picture: "/Assets/Game/Images/tree.scale-100.png" }
				];
				themes['dungeon'] = [
					{ title: "Robot", text: "east", theme: "grass", picture: "/Assets/Game/Images/robot-east.scale-100.png" },
					{ title: "Robot", text: "north", theme: "grass", picture: "/Assets/Game/Images/robot-north.scale-100.png" },
					{ title: "Robot", text: "west", theme: "grass", picture: "/Assets/Game/Images/robot-west.scale-100.png" },
					{ title: "Robot", text: "south", theme: "grass", picture: "/Assets/Game/Images/robot-south.scale-100.png" },
					{ title: "Rocket", text: "yipiiii", theme: "grass", picture: "/Assets/Game/Images/rocket.scale-100.png" },
					{ title: "Tree", text: "a nice tree", theme: "grass", picture: "/Assets/Game/Images/tree.scale-100.png" }
				];
				var dataArray = themes[theme];
				this.itemList = new WinJS.Binding.List(dataArray);
			},

			Entities: {
				get: function () {
					return this.itemList;
				}
			}
		}
	);

	//load list of entities
	var entities = new entitiesClass();
	entities.init();
	Crafty.bind('ThemeChange',  function (data) { entities.loadEntities(data) });

	//make it public
	WinJS.Namespace.define("StupidRobot.Editor", {
		Entities: {
			get: function () {
				return entities.Entities;
			}
		}
	});
})();