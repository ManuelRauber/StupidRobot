(function() {
	"use strict";

	var entitiesClass = WinJS.Class.define(
		null,
		{
			loadEntities: function () {
				var dataArray = [
					{ title: "Robot", text: "east", picture: "/Assets/Game/Images/robot-east.scale-100.png" },
					{ title: "Robot", text: "north", picture: "/Assets/Game/Images/robot-north.scale-100.png" },
					{ title: "Robot", text: "west", picture: "/Assets/Game/Images/robot-west.scale-100.png" },
					{ title: "Robot", text: "south", picture: "/Assets/Game/Images/robot-south.scale-100.png" },
					{ title: "Rocket", text: "yipiiii", picture: "/Assets/Game/Images/rocket.scale-100.png" },
					{ title: "Tree", text: "a nice tree", picture: "/Assets/Game/Images/tree.scale-100.png" }
				];
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
	entities.loadEntities();

	//make it public
	WinJS.Namespace.define("StupidRobot.Editor", {
		Entities: {
			get: function () {
				return entities.Entities;
			}
		}
	});
})();