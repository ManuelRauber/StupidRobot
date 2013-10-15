(function () {
	"use strict";

	WinJS.UI.Pages.define('/pages/settings/settings.html', {
		ready: function (element, options) {
			// Bind the events
			document.getElementById('BackgroundMusicToggle').winControl.onchange = SettingsPage.backgroundMusicChanged;

			// Bind the values
			document.getElementById('BackgroundMusicToggle').winControl.checked = StupidRobot.Settings.isMusicEnabled;
		},

		unload: function () {
			document.getElementById('BackgroundMusicToggle').winControl.onchange = null;
		}
	});

	WinJS.Namespace.define('SettingsPage', {
		backgroundMusicChanged: function () {
			StupidRobot.Settings.isMusicEnabled = document.getElementById('BackgroundMusicToggle').winControl.checked;
			StupidRobot.BackgroundMusicPlayer.start();
		}
	});

	WinJS.Utilities.markSupportedForProcessing(SettingsPage.backgroundMusicChanged);
})();