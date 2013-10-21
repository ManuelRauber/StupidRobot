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

	var divAppender = WinJS.Class.define(
		null,
		{
			appendHTML: function (div, htmlfragment) {
				var basicFragmentLoadDiv = document.getElementById(div);
				WinJS.UI.Fragments.renderCopy(htmlfragment,	basicFragmentLoadDiv)
				.done(
					function () {
						WinJS.log && WinJS.log("successfully loaded fragment", "sample", "status");
						WinJS.UI.processAll();

						var manageBar = document.getElementById('editor_manageBar');
						if (manageBar != undefined)
							manageBar.winControl.show();
						
					},
					function (error) {
						WinJS.log && WinJS.log("error loading fragment: " + error, "sample", "error");
					}
				);
			}
		}
	);


	var appender = new divAppender();
	var game = new gameClass();

	WinJS.Namespace.define("StupidRobot", {
		Game: {
			get: function() {
				return game;
			}
		},
		Utils: {
			get: function() {
				return appender;
			}
		},
		Scenes: scenes
	});
})();

window.addEventListener('load', function () {
	WinJS.UI.processAll();
	StupidRobot.Game.run();
});