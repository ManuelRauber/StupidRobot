Crafty.scene(Game.scenes.Campaign, function() {
	Crafty.background('black');


	Crafty.e("2D, DOM, TiledMapBuilder").setMapDataSource(SOURCE_FROM_TILED_MAP_EDITOR)
	.createWorld(function (tiledmap) {


		//Obstacles
		for (var obstacle = 0; obstacle < tiledmap.getEntitiesInLayer('obstacles').length; obstacle++) {
			tiledmap.getEntitiesInLayer('obstacles')[obstacle]
				.addComponent("Collision")
				.collision();
		}


		//head1
		for (var head = 0; head < tiledmap.getEntitiesInLayer('head1').length; head++) {
			tiledmap.getEntitiesInLayer('head1')[head]
			.z = Math.floor(tiledmap.getEntitiesInLayer('head1')[head]._y + tiledmap.getEntitiesInLayer('head1')[head]._h);
		}
		tiledmap.getEntitiesInLayer('head1')[0].z = Math.floor(tiledmap.getEntitiesInLayer('head1')[0]._y + 2 * tiledmap.getEntitiesInLayer('head1')[0]._h);
		tiledmap.getEntitiesInLayer('head1')[1].z = Math.floor(tiledmap.getEntitiesInLayer('head1')[1]._y + 2 * tiledmap.getEntitiesInLayer('head1')[1]._h);


		//head2
		for (var head = 0; head < tiledmap.getEntitiesInLayer('head2').length; head++) {
			tiledmap.getEntitiesInLayer('head2')[head]
			.z = Math.floor(tiledmap.getEntitiesInLayer('head2')[head]._y + tiledmap.getEntitiesInLayer('head2')[head]._h);
		}
		tiledmap.getEntitiesInLayer('head2')[0].z = Math.floor(tiledmap.getEntitiesInLayer('head2')[0]._y + 2 * tiledmap.getEntitiesInLayer('head2')[0]._h);
		tiledmap.getEntitiesInLayer('head2')[1].z = Math.floor(tiledmap.getEntitiesInLayer('head2')[1]._y + 2 * tiledmap.getEntitiesInLayer('head2')[1]._h);
	});


	/*
	//Player
	Crafty.e("2D, DOM, Fourway, SpriteAnimation, Ogre, Collision")
				.attr({ x: 150, y: 50, z: 10 })
				.animate("walk_left", 0, 1, 3)
				.animate("walk_right", 0, 2, 3)
				.animate("walk_up", 0, 3, 3)
				.animate("walk_down", 0, 0, 3)
				.fourway(2)
				.collision(new Crafty.polygon([10, 60], [40, 60], [40, 67], [10, 67]))
				.bind('Moved', function (from) {
					if (this.hit('obstacles')) {
						this.attr({ x: from.x, y: from.y });
					}
					this.z = Math.floor(this._y + this._h);
				})
		.bind("NewDirection",
				function (direction) {
					if (direction.x < 0) {
						if (!this.isPlaying("walk_left"))
							this.stop().animate("walk_left", 10, -1);
					}
					if (direction.x > 0) {
						if (!this.isPlaying("walk_right"))
							this.stop().animate("walk_right", 10, -1);
					}
					if (direction.y < 0) {
						if (!this.isPlaying("walk_up"))
							this.stop().animate("walk_up", 10, -1);
					}
					if (direction.y > 0) {
						if (!this.isPlaying("walk_down"))
							this.stop().animate("walk_down", 10, -1);
					}
					if (!direction.x && !direction.y) {
						this.stop();
					}
				})
				*/
});
