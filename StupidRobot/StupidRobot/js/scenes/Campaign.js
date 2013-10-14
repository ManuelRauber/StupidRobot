(function () {
	"use strict";

	Crafty.scene(StupidRobot.Scenes.Campaign, function () {
		Crafty.background('black');

		Crafty.sprite(22, 32, '/assets/Game/Images/robot-south.scale-100.png', {
			Stupid: [0, 0]
		});

		Crafty.e("2D, Canvas, TiledMapBuilder").setMapDataSource(SOURCE_FROM_TILED_MAP_EDITOR)
			.createWorld(function (tiledmap) {
				//Obstacles
				for (var obstacle = 0; obstacle < tiledmap.getEntitiesInLayer('obstacles').length; obstacle++) {
					tiledmap.getEntitiesInLayer('obstacles')[obstacle]
						.addComponent("Collision")
						.collision();
				}
			});

		Crafty.e('2D,DOM,Fourway,Stupid,Collision')
			.attr({ x: 120, y: 50, z: 10 })
			.fourway(2)
			.collision(new Crafty.polygon([0, 0], [22, 32]))
			.bind('Moved', function(from) {
				if (this.hit('obstacles')) {
					this.attr({ x: from.x, y: from.y });
				}
				this.z = Math.floor(this._y + this._h);
			});
	});
})();