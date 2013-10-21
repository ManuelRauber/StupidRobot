(function() {
	WinJS.UI.Pages.define('/pages/imprint/imprint.html', {
		ready: function(element, options) {
			for (var i = 0; i < StupidRobot.BackgroundMusicPlayer.musicList.length; i++) {
				var track = StupidRobot.BackgroundMusicPlayer.musicList[i];
				var dd = document.createElement('dd');
				dd.textContent = track.title + ", " + track.interpret;
				document.getElementById('backgroundMusicImprint').appendChild(dd);
			}
		}
	});
})();