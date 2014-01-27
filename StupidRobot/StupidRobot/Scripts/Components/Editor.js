/// <reference path="/Scripts/Reference.js"/>

(function() {
	"use strict";

	Crafty.c('Editor', {
		init: function() {
			this.windowWidth = StupidRobot.Game.width;
			this.windowHeight = StupidRobot.Game.height;

			//Editor Event Bindings
			this.bind('CreateMap', this._createMap);
			this.bind('SaveMap', this.saveMap);
		},

		_createMap: function (data) {

			//remove open map and its children before creating another one
			if (typeof(this._grid) != "undefined") {
				this._grid.each(function () {
					if (!this.has("Persist")) this.destroy();
				});
			}

			//get mapname and mapsize of data
			var mapname = data['mapname'].value;
			var gridblocks = { 'small': 10, 'medium': 15, 'big': 20 };
			var size;
			for (var i = 0 ; i < data['mapsize'].length; i++) {
				if (data['mapsize'][i].checked) {
					size = gridblocks[ data['mapsize'][i].value ];
				}
			}

			//create grid
			this._grid = Crafty.e('2D, Canvas, Grid')
				.Grid((this.windowWidth / 2), (this.windowHeight / 2), null, null, size);

			//create theme entities structure
			this._createMapThemeEntities();
		},

		_createMapThemeEntities: function () {
			var blocks = this._grid.blocks;
			
			//create surrounding walls
			for (var i = 1; i <= blocks; i++) {
				this._grid.addGridItem(i, 1, 'solid[0]', false);
				this._grid.addGridItem(1, i, 'solid[0]', false);
				this._grid.addGridItem(i, blocks, 'solid[0]', false);
				this._grid.addGridItem(blocks, i, 'solid[0]', false);
			}

			this.grid = this._grid;
		},

		saveMap: function (file) {
		  if (typeof (this.grid) != 'undefined') {
		    //first check if the actual map to save is valid
		    var gridItems = this.grid.getGridItems();
		    //multiple heroes?
		    var herocount = 0;
		    for (var i = 1; i <= gridItems.length ; i++)
		    {
		      if (gridItems[i].entity.getEntity.data['type'].substring(0, 4) == 'hero')
		        herocount++;
		    }
		    console.log(herocount);
		  }
		  
      //save the map
		  //StupidRobot.Editor.PersistenceManager.saveMap(file);
		}
	});

})();