(function () {
	var backgroundPlayer = WinJS.Class.define(
		function () {
			this._init();
		},
	{
		_musicList: {
			get: function () {
				return [
					'/assets/Game/Sounds/Music/TheComplex.mp3',
					'/assets/Game/Sounds/Music/DiscoConTutti.mp3',
					'/assets/Game/Sounds/Music/BrightlyFancy.mp3'
				];
			}
		},

		_getRandomInt: function (min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;

		},

		_init: function () {
			for (var i = 0; i < this._musicList.length; i++) {
				Crafty.audio.add('bgm' + i, this._musicList[i]);
			}
		},

		_play: function () {
			var rnd = this._getRandomInt(0, this._musicList.length - 1);
			Crafty.audio.play('bgm' + rnd);

			Crafty.audio.sounds['bgm' + rnd].obj.addEventListener('ended', function () {
				StupidRobot.BackgroundMusicPlayer._play();
			});
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