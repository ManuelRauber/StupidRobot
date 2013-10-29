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
				themes['desert'] = [
					{ title: "bush", text: "a normal bush", theme: "grass", picture: "/Assets/Game/Images/Entities/desert_bush.png" },
					{ title: "ground", text: "ground", theme: "grass", picture: "/Assets/Game/Images/desert_ground.png" },
					{ title: "rock", text: "solid rock", theme: "grass", picture: "/Assets/Game/Images/desert_rock.png" },
					{ title: "wall", text: "brick wall", theme: "grass", picture: "/Assets/Game/Images/desert_wall.png" },
				];
				var dataArray = themes[theme];
				this.themes = themes;
				this.itemList = new WinJS.Binding.List(dataArray);
			},
		
			//get entity from itemList
			getEntity: function (title) {
				for (var i = 0 ; i < this.itemList.length ; i++) {
					if (this.itemList.getItem(i).data['title'] == title)
						return this.itemList.getItem(i);
				}
				return undefined;
			},

			//all assets from all themes
			AllAssets: {
				get: function () {
					return this.themes;
				}
			},

			//itemList, with the assets from the specific theme
			LoadedEntities: {
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
		LoadedEntities: {
			get: function () {
				return entities.LoadedEntities;
			}
		},
		AllAssets: {
			get: function () {
				return entities.AllAssets;
			}
		},
		GetEntity: function (title) {
				return entities.getEntity(title);
		}
	});
})();