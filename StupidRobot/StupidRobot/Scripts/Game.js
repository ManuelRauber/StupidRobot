(function() {
	"use strict";

	var gameClass = WinJS.Class.define(
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
			
			run: function () {
				Crafty.init(this.width, this.height);
				Crafty.canvas.init();

				StupidRobot.BackgroundMusicPlayer.start();

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
			},

			Editor: {
				get: function() {
					return 'Editor';
				}
			}
		}
	);

	var game = new gameClass();

	WinJS.Namespace.define("StupidRobot", {
		Game: {
			get: function() {
				return game;
			}
		},
		Scenes: scenes
	});
})();

window.addEventListener('load', function () {
	WinJS.UI.processAll();

	//add AppBars
	StupidRobot.Utils.append('/Pages/Game/Game.html', 'pageBody', [
	'/Pages/AppBars/EditorTop.html',
	'/Pages/AppBars/EditorBottom.html'
	]);

	StupidRobot.Game.run();
});