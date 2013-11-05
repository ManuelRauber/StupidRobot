(function () {
	"use strict";

	Crafty.c('GridItem', {
		GridItem: function(x, y, w, h, entityType, clickable) {
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			this.entityType = entityType;
			if (clickable == false) this.unbind('Click');
			//let this gridItem know, which current entity is selected to place
			this.bind('EntitySelected', function (selectedEntity) { this.selectedEntity = selectedEntity });
			this.bind('ThemeChange', function () { this.setEntity(StupidRobot.Editor.GetEntity(this.entityType)) });
			this.setEntity(StupidRobot.Editor.GetEntity(entityType));
			return this;
		},

		setEntity: function (entity) {
			var entities = {
				'hero': this.setOverlayEntity(entity),
				'item': this.setOverlayEntity(entity),
				'solid': this.setBasicEntity(entity),
				'free': this.setBasicEntity(entity)
			};
			entities[entity.data['type'].substring(0, 4)];
		},

		setBasicEntity: function (entity) {
			this.entity = entity;
			this.entityType = entity.data['type'];
			this.trigger('Change');
		},

		setOverlayEntity: function (entity) {
			this.overlappingEntity = entity;
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

			if (typeof (this.entity) != "undefined") {
				var entityImage = new Image;
				entityImage.src = this.entity.data['picture'];
				ctx.drawImage(entityImage, this.x, this.y, this.w, this.h);
				if (typeof (this.overlappingEntity) != "undefined") {
					var overlappingImage = new Image;
					overlappingImage.src = this.overlappingEntity.data['picture'];
					ctx.drawImage(overlappingImage, this.x, this.y, this.w, this.h);
				}
			}
			else {
				ctx.fillStyle = 'black';
				ctx.font = "10px Arial";
				ctx.textAlign = 'center';
				ctx.fillText("no Entity", this.x + (this.w / 2), this.y + this.h / 2 + 13);
			}

			//TODO: Next Line could be a chooseable option for activating gridview or not
			//restore gridlines or else the picture would overpaint it
			ctx.strokeRect(this.x, this.y, this.w, this.h);

			ctx.restore();
		}
	});
})();