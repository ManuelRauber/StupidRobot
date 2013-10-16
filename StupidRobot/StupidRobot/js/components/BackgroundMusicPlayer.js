(function () {
	var backgroundPlayer = WinJS.Class.define(
		function() {
			this._init();
		},
	{
		_currentPlayIndex: null,

		musicList: {
			get: function () {
				return [{
						title: 'The Complex',
						interpret: 'Kevin MacLeod',
						file: '/assets/Game/Sounds/Music/TheComplex.mp3'
					}, {
						title: 'Disco con Tutti',
						interpret: 'Kevin MacLeod',
						file: '/assets/Game/Sounds/Music/DiscoConTutti.mp3'
					}, {
						title: 'Brightly Fancy',
						interpret: 'Kevin MacLeod',
						file: '/assets/Game/Sounds/Music/BrightlyFancy.mp3'
					}];
			}
		},

		_getRandomInt: function (min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;

		},

		_init: function () {
			for (var i = 0; i < this.musicList.length; i++) {
				Crafty.audio.add('bgm' + i, this.musicList[i].file);
			}
		},

		_play: function () {
			var rnd = this._getRandomInt(0, this.musicList.length - 1);
			Crafty.audio.play('bgm' + rnd);
			this._currentPlayIndex = rnd;

			this._showFlyout();

			Crafty.audio.sounds['bgm' + rnd].obj.addEventListener('ended', function () {
				StupidRobot.BackgroundMusicPlayer._play();
			});
		},
		
		_showFlyout: function() {
			document.getElementById('backgroundMusicFlyoutTitle').textContent = this.musicList[this._currentPlayIndex].title;
			document.getElementById('backgroundMusicFlyoutInterpret').textContent = this.musicList[this._currentPlayIndex].interpret;
			document.getElementById('backgroundMusicFlyout').winControl.show('pageBody', 'bottom', 'right');
			setTimeout(StupidRobot.BackgroundMusicPlayer._hideFlyout, 5000);
		},
		
		_hideFlyout: function() {
			document.getElementById('backgroundMusicFlyout').winControl.hide();
		},

		start: function () {
			if (StupidRobot.Settings.isMusicEnabled) {
				this._play();
				return;
			}

			Crafty.audio.stop();
		}
	},
		null
	);

	var player = new backgroundPlayer();

	WinJS.Namespace.define('StupidRobot', {
		BackgroundMusicPlayer: {
			get: function () {
				return player;
			}
		}
	});
})();