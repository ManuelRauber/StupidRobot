(function () {
	"use strict";

	var filesToInclude = [
		'/Scripts/Utils/HtmlUtilities.js',
		'/Scripts/Game.js',
    '/Scripts/Commands/CommandManager.js',
    '/Scripts/Commands/Command.js',
    '/Scripts/Commands/Editor/RemoveEntity.js',
    '/Scripts/Commands/Editor/SetEntity.js',
		'/Scripts/Components/Animation/AnimationBase.js',
		'/Scripts/Components/Animation/FlyIn.js',
		'/Scripts/Components/BackgroundMusicPlayer.js',
		'/Scripts/Components/Button.js',
		'/Scripts/Components/Editor.js',
		'/Scripts/Components/EditorTaskbar.js',
		'/Scripts/Components/Grid.js',
		'/Scripts/Components/ProgressBar.js',
		'/Scripts/Components/TweenAnimation.js',
		'/Scripts/Components/GridItem.js',
		'/Scripts/Maps/Testmap.js',
		'/Scripts/Pages/Entities.js',
		'/Scripts/Pages/Imprint.js',
		'/Scripts/Pages/Settings.js',
		'/Scripts/Scenes/AppStart.js',
		'/Scripts/Scenes/Campaign.js',
		'/Scripts/Scenes/Editor.js',
		'/Scripts/Scenes/MainMenu.js',
		'/Scripts/Utils/Flyouts.js',
		'/Scripts/Main.js',
		'/Scripts/Utils/Settings.js'
	];
	
	for (var i = 0; i < filesToInclude.length; i++) {
		var fileToInclude = document.createElement('script');
		fileToInclude.setAttribute('type', 'text/javascript');
		fileToInclude.setAttribute('src', filesToInclude[i]);
		document.getElementsByTagName('head')[0].appendChild(fileToInclude);
	}
})();