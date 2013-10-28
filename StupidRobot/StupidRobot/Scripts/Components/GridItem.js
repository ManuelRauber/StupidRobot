(function () {
	"use strict";

	Crafty.c('GridItem', {
		GridItem: function(x, y, w, h, entity, clickable) {
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			if (typeof (entity) != "undefined") { this.setEntity(entity); }
			if (clickable == false) this.unbind('Click');
			//let this gridItem know, which current entity is selected to place
			this.bind('EntitySelected', function (selectedEntity) { this.selectedEntity = selectedEntity });
			return this;
		},

		setEntity: function (entity) {
			this.image = new Image;
			this.image.src = entity.data['picture'];
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

			//TODO: Next Line could be a chooseable option for activating gridview or not
			ctx.strokeRect(this.x, this.y, this.w, this.h);

			ctx.restore();
		}
	});
})();