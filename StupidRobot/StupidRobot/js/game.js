Game = {	
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

		Crafty.scene('AppStart');
	}
};

window.addEventListener('load', Game.start);