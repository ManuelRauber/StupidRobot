(function () {
	"use strict";

	Crafty.c('GridItem', {
		GridItem: function(x, y, w, h, entity) {
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			this.bind('EntitySelected', function (selectedEntity) { this.selectedEntity = selectedEntity });
			this.draw();
			return this;
		},

		setEntity: function (entity) {
			this.image = new Image;
			this.image.src = StupidRobot.Editor.Entities.getItem(entity.index).data['picture'];
			//TODO Entity properties
			this.trigger('Change');
		},

		init: function () {
			this.requires('Mouse');

			var ctx = Crafty.canvas.context;

			this.isHovering = false;

			this.bind('Click', function () {
				if (typeof (this.selectedEntity) != "undefined") {
					this.setEntity(this.selectedEntity);
				}
			});

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

			ctx.globalAlpha = this.isHovering ? 0.4 : 1;

			if (typeof (this.image) != "undefined") {
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