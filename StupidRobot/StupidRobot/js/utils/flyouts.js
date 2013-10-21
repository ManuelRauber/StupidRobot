(function() {
	WinJS.Namespace.define('StupidRobot.Flyouts', {
		showSettings: function () {
			WinJS.UI.SettingsFlyout.showSettings('settings', '/pages/settings/settings.html');
		},

		showImprint: function () {
			WinJS.UI.SettingsFlyout.showSettings('imprint', '/pages/imprint/imprint.html');
		}
	});
})();