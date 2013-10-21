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


	/**
	* htmlAppender
	*	methods:
	*	+append(String originhtml, String div, StringArray htmlfragment)
	*/
	var htmlAppender = WinJS.Class.define(
		null,
		{
			append: function (originhtml, div, htmlfragment) {
				//this operation can only be done once!
				var page = WinJS.UI.Pages.define(originhtml, {
					ready: function (element, options) {
						//iterate through the htmlfragment array
						for (var i = 0; i < htmlfragment.length ; i++)
						{
							var basicFragmentLoadDiv = document.getElementById(div);
							WinJS.UI.Fragments.renderCopy(htmlfragment[i], basicFragmentLoadDiv)
							.done(
								function () {
									console.log("successfully loaded fragment", "sample", "status");
									WinJS.UI.processAll();
								},
								function (error) {
									console.log("error loading fragment: " + error, "sample", "error");
								}
							);
						}
					},
					unload: function () {
						//TODO
					}
				});
			}
		});

	var htmlappender = new htmlAppender();
	var game = new gameClass();

	WinJS.Namespace.define("StupidRobot", {
		Game: {
			get: function() {
				return game;
			}
		},
		Utils: {
			get: function() {
				return htmlappender;
			}
		},
		Scenes: scenes
	});
})();

window.addEventListener('load', function () {
	WinJS.UI.processAll();

	//add AppBars
	StupidRobot.Utils.append('/pages/game/game.html', 'pageBody', [
	'/pages/appBars/editor_top.html',
	'/pages/appBars/editor_bottom.html'
	]);

	StupidRobot.Game.run();
});