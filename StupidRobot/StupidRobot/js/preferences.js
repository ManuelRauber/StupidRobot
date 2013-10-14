(function() {
	var settingKeys = {
		IsMusicEnabled: "IsMusicEnabled"
	};

	var preferencesClass = WinJS.Class.define(
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
			}
		},
		null);

	var preferences = new preferencesClass();

	WinJS.Namespace.define('StupidRobot', {		
		Preferences: {
			get: function() {
				return preferences;
			}
		}
	});
})();