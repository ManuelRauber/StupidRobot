(function () {
	"use strict";

	Crafty.c('GridItem', {
		GridItem: function(x, y, w, h, entityType, clickable) {
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			this.originEntityType = entityType;
			this.removeMode = false;
			if (clickable == false) this.unbind('Click');
      //Event: ThemeChange, change the entity of this griditem to the new style
			this.bind('ThemeChange', function () { this.setEntity(StupidRobot.Editor.GetEntity(this.entityType)) });
      //Event: RemoveMode, the user selected the removebutton
			this.bind('RemoveMode', function (removeMode) { this.removeMode = removeMode; });
		  //set the Entity of the constructor, no need to add this first setupcommand to the CommandManager
			this.setEntity(StupidRobot.Editor.GetEntity(entityType));
			return this;
		},

		setEntity: function (entity) {
		  var my = this;

		  var entities = {
		    'hero': function () { my._setBasicEntity(entity) },
				'item': function () { my._setBasicEntity(entity) },
				'soli': function () { my._setBasicEntity(entity) },
				'free': function () { my._setBasicEntity(entity) }
			};
			entities[ entity.data['type'].substring(0,4) ]();
			this.trigger('Change');
		},

		getEntity: function () {
		  return this.entity;
		},

		getUndoEntity: function () {
		  return this.undoEntity;
		},

		removeEntity: function () {
		  if (typeof (this.overlappingEntity) != "undefined") {
		    this.undoEntity = this.overlappingEntity;
		    this.overlappingEntity = undefined;
		    this.trigger('Change');
		    return;
		  }
      //save the entity in this griditem, so an undo can recreate the previous state
		  this.undoEntity = this.entity;
      //reset the entity in this griditem to its origin (free entity)
		  this.setEntity(StupidRobot.Editor.GetEntity(this.originEntityType));
		  this.trigger('Change');
		},

		_setBasicEntity: function (entity) {
			this.entity = entity;
			this.entityType = entity.data['type'];
		},

    /*
		_setOverlayEntity: function (entity) {
      //only add the overlayentity when this entity is a free (not solid) one
		  if (this.getEntity().data['type'].substring(0, 4) != 'soli')
        this.overlappingEntity = entity;
		},
    */

		init: function () {
			this.requires('Mouse');

			var ctx = Crafty.canvas.context;

			this.isHovering = false;

			this.bind('Click', function () {
			  var command = null;
        //is the remove button active?
			  if (this.removeMode) {
			    var command = StupidRobot.Commands.RemoveEntity;
			  }
			  else if (!this.removeMode) {
			    var command = StupidRobot.Commands.SetEntity;
			  }
			  StupidRobot.CommandManager.addAction(this, command);
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
        /*
				if (typeof (this.overlappingEntity) != "undefined") {
					var overlappingImage = new Image;
					overlappingImage.src = this.overlappingEntity.data['picture'];
					ctx.drawImage(overlappingImage, this.x, this.y, this.w, this.h);
				}
        */
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