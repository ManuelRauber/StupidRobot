Preferences = {	
	isMusicEnabled: function() {
		var roamingSettings = Windows.Storage.ApplicationData.current.roamingSettings;

		return roamingSettings.values["IsMusicEnabled"];
	},
	
	setMusicEnabled: function(value) {
		var roamingSettings = Windows.Storage.ApplicationData.current.roamingSettings;

		roamingSettings.values["IsMusicEnabled"] = value;
	}
};