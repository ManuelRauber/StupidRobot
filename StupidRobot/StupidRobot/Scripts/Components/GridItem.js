(function () {
	"use strict";

	Crafty.c('GridItem', {
		GridItem: function(x, y, w, h, entity) {
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			return this;
		},

		Entity: function (entity) {
			this.image = new Image;
			this.image.src = StupidRobot.Editor.Entities.getItem(entity.index).data['picture'];
		},

		init: function () {
			this.requires('Mouse');

			var ctx = Crafty.canvas.context;

			var gradient = ctx.createLinearGradient(0, 0, 0, this.h);
			gradient.addColorStop(0, '#b0b43b');
			gradient.addColorStop(1, '#D6DB48');
			this.normalGradient = gradient;

			gradient = ctx.createLinearGradient(0, 0, 0, this.h);
			gradient.addColorStop(0, '#656722');
			gradient.addColorStop(1, '#939633');
			this.hoverGradient = gradient;

			this.isHovering = false;

			this.bind('MouseOver', function () {
				this.isHovering = true;
				this.trigger('Change');
			});

			this.bind('MouseOut', function () {
				this.isHovering = false;
				this.trigger('Change');
			});
		},

		draw: function () {
			var ctx = Crafty.canvas.context;
			ctx.save();

			if (typeof (this.image) != "undefined") {
				ctx.globalAlpha = this.isHovering ? 0.4 : 1;
				ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
			}
			else
			{
				ctx.fillStyle = 'black';
				ctx.font = "10px Arial";
				ctx.textAlign = 'center';
				ctx.fillText("no Image", this.x + (this.w / 2), this.y + this.h / 2 + 13);
			}

			ctx.restore();
		}
	});
})();