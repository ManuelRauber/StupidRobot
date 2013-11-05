(function() {
	"use strict";

	var entitiesClass = WinJS.Class.define(
		null,
		{
			init: function () {
				//load theme forest as standard
				this.loadEntities('desert');
			},

			loadEntities: function (theme) {
				//declare each theme
				var themes = [];
				themes['forest'] = [
					{ type: "solid[0]", title: "Tree", text: "a nice tree", picture: "/Assets/Game/Images/Entities/Landscape/Forest/forest_wall.png" },	
				];
				themes['desert'] = [
					{ type: "solid[0]", title: "wall", text: "brick wall", picture: "/Assets/Game/Images/Entities/Landscape/Desert/desert_wall.png" },
					{ type: "solid[1]", title: "rock", text: "solid rock", picture: "/Assets/Game/Images/Entities/Landscape/Desert/desert_rock.png" },
					{ type: "solid[2]", title: "bush", text: "a normal bush", picture: "/Assets/Game/Images/Entities/Landscape/Desert/desert_bush.png" },
					{ type: "free[0]", title: "ground", text: "ground", picture: "/Assets/Game/Images/Entities/Landscape/Desert/desert_ground.png" },
				];
				themes['dungeon'] = [
					{ type: "solid[0]", title: "wall", text: "dungeon wall", picture: "/Assets/Game/Images/Entities/Landscape/Dungeon/dungeon_wall.png" },
					{ type: "solid[1]", title: "hole", text: "huge hole", picture: "/Assets/Game/Images/Entities/Landscape/Dungeon/dungeon_hole.png" },
					{ type: "solid[2]", title: "pipe", text: "super mario?", picture: "/Assets/Game/Images/Entities/Landscape/Dungeon/dungeon_pipe.png" },
					{ type: "free[0]", title: "ground", text: "dungeon floor", picture: "/Assets/Game/Images/Entities/Landscape/Dungeon/dungeon_ground.png" },
				];
				//declare characters and items which exists on all themes. They can be set OVER all theme-entities of type free
				var charsAndItems = [
					{ type: "hero[0]", title: "stupid", text: "our hero", picture: "/Assets/Game/Images/Entities/Characters/stupid.png" },
					{ type: "item[0]", title: "rocket", text: "final rocket", picture: "/Assets/Game/Images/Entities/Items/rocket.png" }
				];

				//combine themes array and charsAndItems array into dataArray
				var dataArray = themes[theme].concat(charsAndItems);
				//make the themes array public for allAssets return method
				this.themes = themes;
				//create a new WinJS List of the dataArray
				this.itemList = new WinJS.Binding.List(dataArray);
			},
		
			//get entity by its type from the current itemList
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

			//return all assets from all themes (used for loading the assets at app-start)
			AllAssets: {
				get: function () {
					return this.themes;
				}
			},

			//return the current theme itemList
			LoadedEntities: {
				get: function () {
					return this.itemList;
				}
			},
		}
	);

	//load the entities
	var entities = new entitiesClass();
	entities.init();

	//public access
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