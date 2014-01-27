(function () {
	"use strict";
	
	/**
	* Grid
	* - this component has two behaviours:
	*  1: if x2 and y2 params are given, it will create a rectangle grid from
	*     (x1,y1)-(x2,y2) with the amount of blocks (it will scale if necessary.
	*			The cube shapes of the blocks can become rectangles because of this).
	*  2: if x2 and y2 params are not given, x1 and y1 params are seen as the middle point
	*     of the wanted grid. Therefore it will place the amount of blocks around it,
	*     so the grid is centralised. It will automatically scale the blocks on low-res screens
	*/
	Crafty.c('Grid', {
		Grid: function(x1, y1, x2, y2, blocks) {
			this.x1 = x1;
			this.y1 = y1;
			this.x2 = x2;
			this.y2 = y2;
			this.blocks = blocks;
			this.gridItemList = [];
			this.init();
			return this;
		},

		isVisible: true,

		getGridItems: function () {
			return this.gridItemList;
		},

		addGridItem: function (row, column, entityType, clickable) {
			//calculate grid x and y for wanted column & row
			var x_gridItem = this.x1 + (this.w * (row - 1));
			var y_gridItem = this.y1 + (this.h * (column -1));

			//check if a entity already exists, delete it then
			for (var i = 0; i < this.gridItemList.length; i++) {
				if (this.gridItemList[i]['row'] == row && this.gridItemList[i]['column'] == column) {
					this.gridItemList[i]['entity'].each(function () {
						if (!this.has("Persist")) {
							this.destroy();
						}
					});					
				}
			}

			//create new Entity
			this.gridItemList.push({
				'row': row, 
				'column': column, 
				'entity': Crafty.e('2D, Canvas, GridItem')
										.GridItem(x_gridItem, y_gridItem, this.w, this.h, entityType, clickable)
			});
		},

		init: function () {
			this.isVisible = true;
			//mode 1 was chosen
			if (this.x2 != null || this.y2 != null)
			{
				var gridWidth = this.x2 - this.x1;
				var gridHeight = this.y2 - this.y1;
				this.w = gridWidth / this.blocks;
				this.h = gridHeight / this.blocks;
			}
			//mode 2 was chosen
			else
			{
				var windowWidth = StupidRobot.Game.width;
				var windowHeight = StupidRobot.Game.height;

				//calculate size of blocks depending on screen resolution (minus appbars)
				this.w = Math.floor((windowHeight - (200)) / this.blocks);
				this.h = this.w;

				//centralise
				this.x1 = this.x1 - (this.w * (this.blocks / 2));
				this.y1 = this.y1 - (this.h * (this.blocks / 2));
			}
			//fill the grid with empty griditems
			for (var i = 1; i <= this.blocks; i++) {
				for (var j = 1; j <= this.blocks ; j++) {
					this.addGridItem(j, i, 'free[0]', true);
				}
			}
		},

		draw: function () {
			if (!this.isVisible) {
				return;
			}

			var ctx = Crafty.canvas.context;
			ctx.save();

			//create gridlines
			for (var j = 0; j < this.blocks; j++) {
				for (var i = 0; i < this.blocks; i++) {
					ctx.strokeRect(this.x1 + (this.w * i), this.y1 + (this.h * j), this.w, this.h);
				}
			}

			ctx.restore();
		}
	});
})();