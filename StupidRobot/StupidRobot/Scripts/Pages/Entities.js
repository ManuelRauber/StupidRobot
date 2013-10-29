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
					{ type: "solid[0]", title: "Tree", text: "a nice tree", picture: "/Assets/Game/Images/tree.scale-100.png" },
					{ type: "solid[1]", title: "Rocket", text: "yipiiii", picture: "/Assets/Game/Images/rocket.scale-100.png" },
					{ type: "solid[2]", title: "Robot", text: "south", picture: "/Assets/Game/Images/robot-south.scale-100.png" },
					{ type: "free[0]", title: "Robot", text: "west", picture: "/Assets/Game/Images/robot-west.scale-100.png" },
				];
				themes['desert'] = [
					{ type: "solid[0]", title: "wall", text: "brick wall", picture: "/Assets/Game/Images/Entities/desert_wall.png" },
					{ type: "solid[1]", title: "rock", text: "solid rock", picture: "/Assets/Game/Images/Entities/desert_rock.png" },
					{ type: "solid[2]", title: "bush", text: "a normal bush", picture: "/Assets/Game/Images/Entities/desert_bush.png" },
					{ type: "free[0]", title: "ground", text: "ground", picture: "/Assets/Game/Images/Entities/desert_ground.png" },
				];
				themes['dungeon'] = [
					{ type: "solid[0]", title: "wall", text: "dungeon wall", picture: "/Assets/Game/Images/Entities/dungeon_wall.png" },
					{ type: "solid[1]", title: "hole", text: "huge hole", picture: "/Assets/Game/Images/Entities/dungeon_hole.png" },
					{ type: "solid[2]", title: "pipe", text: "super mario?", picture: "/Assets/Game/Images/Entities/dungeon_pipe.png" },
					{ type: "free[0]", title: "ground", text: "dungeon floor", picture: "/Assets/Game/Images/Entities/dungeon_ground.png" },
				];
				var dataArray = themes[theme];
				this.themes = themes;
				this.itemList = new WinJS.Binding.List(dataArray);
			},
		
			//get entity from itemList
			getEntity: function (type) {
				for (var i = 0 ; i < this.itemList.length ; i++) {
					if (this.itemList.getItem(i).data['type'] == type)
						return this.itemList.getItem(i);
				}
				return undefined;
			},

			//change the theme
			changeTheme: function (theme) {
				this.loadEntities(theme);
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
			},
		}
	);

	//load list of entities
	var entities = new entitiesClass();
	entities.init();

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
		},
		ChangeTheme: function (theme) {
			entities.changeTheme(theme);
		}
	});
})();