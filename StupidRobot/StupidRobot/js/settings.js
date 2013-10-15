(function () {
	"use strict";

	var settingKeys = {
		IsMusicEnabled: "IsMusicEnabled"
	};

	var settingsClass = WinJS.Class.define(
		function() {
			this._roamingSettings = Windows.Storage.ApplicationData.current.roamingSettings;
		},
		{			
			_roamingSettings: null,
			
			isMusicEnabled: {
				get: function () {
					return this._roamingSettings.values[settingKeys.IsMusicEnabled];
				},
				set: function(value) {
					if (typeof(value) != "boolean") {
						throw "value is not boolean";
					}

					this._roamingSettings.values[settingKeys.IsMusicEnabled] = value;
				}
			},
			
			showFlyout: function() {
				WinJS.UI.SettingsFlyout.showSettings('settings', '/pages/settings/settings.html');
			}
		},
		null);

	var settings = new settingsClass();

	WinJS.Namespace.define('StupidRobot', {		
		Settings: {
			get: function() {
				return settings;
			}
		}
	});
})();