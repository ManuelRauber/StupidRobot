Game = {	
	width: function() {
		return window.innerWidth + 1;
	},
	
	height: function() {
		return window.innerHeight + 1;
	},
	
	start: function() {
		Crafty.init(Game.width(), Game.height());
		Crafty.canvas.init();

		Crafty.scene('AppStart');
	}
};

window.addEventListener('load', Game.start);