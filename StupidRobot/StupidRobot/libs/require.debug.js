(function () {
	"use strict";

	var filesToInclude = [
		'/js/utils/HtmlUtilities.js',
		'/js/game.js',
		'/js/components/animation/AnimationBase.js',
		'/js/components/animation/FlyIn.js',
		'/js/components/BackgroundMusicPlayer.js',
		'/js/components/Button.js',
		'/js/components/EditorTaskbar.js',
		'/js/components/Grid.js',
		'/js/components/ProgressBar.js',
		'/js/components/TweenAnimation.js',
		'/js/maps/testmap.js',
		'/js/pages/imprint.js',
		'/js/pages/settings.js',
		'/js/scenes/Scenes.js',
		'/js/scenes/AppStart.js',
		'/js/scenes/Campaign.js',
		'/js/scenes/Editor.js',
		'/js/scenes/MainMenu.js',
		'/js/utils/flyouts.js',
		'/js/main.js',
		'/js/utils/settings.js'
		
	];
	for (var i = 0; i < filesToInclude.length; i++) {
		var fileToInclude = document.createElement('script');
		fileToInclude.setAttribute('type', 'text/javascript');
		fileToInclude.setAttribute('src', filesToInclude[i]);
		document.getElementsByTagName('head')[0].appendChild(fileToInclude);
	}
})();