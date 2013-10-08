Game = {
	scenes: {
		Start: 'AppStart',
		MainMenu: 'MainMenu',
		Campaign: 'Campaign'
	},

	width: function() {
		return window.innerWidth;
	},

	height: function() {
		return window.innerHeight;
	},

	start: function() {
		Crafty.init(Game.width(), Game.height());
		Crafty.canvas.init();

		BackgroundMusicPlayer.start();

		Crafty.scene(Game.scenes.Start);
	},
	
	switchScene: function(scene) {
		Crafty.scene(scene);
	}
};

window.addEventListener('load', Game.start);