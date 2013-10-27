(function () {
	"use strict";

	Crafty.c('GridItem', {
		GridItem: function(x, y, w, h) {
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			return this;
		},

		init: function () {

		},

		draw: function () {
			var ctx = Crafty.canvas.context;
			ctx.save();

			ctx.fillStyle = 'green';
			ctx.fillRect(this.x, this.y, this.w, this.h);

			ctx.restore();
		}
	});
})();