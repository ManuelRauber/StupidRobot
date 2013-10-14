(function () {
	Crafty.c('Grid', {
		Grid: function (x1, y1, x2, y2, blocks) {
			this.x1 = x1;
			this.y1 = y1;
			this.x2 = x2;
			this.y2 = y2;
			this.blocks = blocks;
			this.init();
			return this;
		},

		init: function () {
			var gridWidth = this.x2 - this.x1;
			var gridHeight = this.y2 - this.y1;
			this.w = gridWidth / this.blocks;
			this.h = gridHeight / this.blocks;
		},

		draw: function () {
			var ctx = Crafty.canvas.context;
			ctx.save();

			for (var j = 0; j < this.blocks; j++) {
				for (var i = 0; i < this.blocks; i++) {
					ctx.strokeRect(this.x1 + (this.w * i), this.y1 + (this.h * j), this.w, this.h);
				}
			}

			ctx.restore();
		}
	});
})();