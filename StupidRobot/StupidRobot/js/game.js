(function() {
	"use strict";

	var game = WinJS.Class.define(
		null,
		{
			width: {
				get: function() {
					return window.innerWidth;
				}
			},
			
			height: {
				get: function() {
					return window.innerHeight;
				}
			},
			
			run: function() {
				Crafty.init(this.width, this.height);
				Crafty.canvas.init();
				
				// Backgroundmusicplayer

				this.switchScene(StupidRobot.Scenes.AppStart);
			},
			
			switchScene: function(scene) {
				Crafty.scene(scene);
			}
		}
	);

	var scenes = WinJS.Class.define(
		null,
		null,
		{
			AppStart: {
				get: function() {
					return 'AppStart';
				}
			},
			
			Campaign: {
				get: function() {
					return 'Campaign';
				}
			},
			
			MainMenu: {
				get: function() {
					return 'MainMenu';
				}
			}
		}
	);

	WinJS.Namespace.define("StupidRobot", {
		Game: new game(),
		Scenes: scenes
	});
	
	window.addEventListener('load', StupidRobot.Game.run);
})();