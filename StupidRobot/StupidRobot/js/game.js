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

	var appBarAppender = WinJS.Class.define(
		null,
		{
			appendAppBar: function (div, htmlfragment) {

				var page = WinJS.UI.Pages.define("/pages/game/game.html", {
					ready: function (element, options) {

						var basicFragmentLoadDiv = document.getElementById(div);
						WinJS.UI.Fragments.renderCopy(htmlfragment, basicFragmentLoadDiv)
						.done(
							function () {
								console.log("successfully loaded fragment", "sample", "status");
								WinJS.UI.processAll();
							},
							function (error) {
								console.log("error loading fragment: " + error, "sample", "error");
							}
						);
					},
					unload: function () {

					}
				});
			}
		});

	var appBars = new appBarAppender();
	var game = new gameClass();

	WinJS.Namespace.define("StupidRobot", {
		Game: {
			get: function() {
				return game;
			}
		},
		Utils: {
			get: function() {
				return appBars;
			}
		},
		Scenes: scenes
	});
})();

window.addEventListener('load', function () {
	WinJS.UI.processAll();
	StupidRobot.Game.run();
});