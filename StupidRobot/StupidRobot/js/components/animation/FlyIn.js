(function() {
	"use strict";

	var flyInFromLeft = WinJS.Class.derive(StupidRobot.Animations.AnimationBase,
		function (element, startAfterTrigger, followTrigger) {
			StupidRobot.Animations.AnimationBase.call(this, element, startAfterTrigger, followTrigger);
		},
		{
			_prepare: function () {
				this._originalX = this._element.x;
				this._element.x = -this._element.w;
			},

			_action: function () {
				this._element.tween({
					x: this._originalX
				}, 20);
			}
		});
	
	var flyInFromRight = WinJS.Class.derive(StupidRobot.Animations.AnimationBase,
		function (element, startAfterTrigger, followTrigger) {
			StupidRobot.Animations.AnimationBase.call(this, element, startAfterTrigger, followTrigger);
		},
		{
			_prepare: function () {
				this._originalX = this._element.x;
				this._element.x = StupidRobot.Game.width + this._element.w;
			},

			_action: function () {
				this._element.tween({
					x: this._originalX
				}, 20);
			}
		});
	
	var flyInFromTop = WinJS.Class.derive(StupidRobot.Animations.AnimationBase,
		function (element, startAfterTrigger, followTrigger) {
			StupidRobot.Animations.AnimationBase.call(this, element, startAfterTrigger, followTrigger);
		},
		{
			_prepare: function () {
				this._originalY = this._element.y;
				this._element.y = -this._element.h;
			},

			_action: function () {
				this._element.tween({
					y: this._originalY
				}, 20);
			}
		});
	
	var flyInFromBottom = WinJS.Class.derive(StupidRobot.Animations.AnimationBase,
		function (element, startAfterTrigger, followTrigger) {
			StupidRobot.Animations.AnimationBase.call(this, element, startAfterTrigger, followTrigger);
		},
		{
			_prepare: function () {
				this._originalY = this._element.y;
				this._element.y = StupidRobot.Game.height + this._element.h;
			},

			_action: function () {
				this._element.tween({
					y: this._originalY
				}, 20);
			}
		});
	

	WinJS.Namespace.define('StupidRobot.Animations', {
		FlyInFromLeft: flyInFromLeft,
		FlyInFromRight: flyInFromRight,
		FlyInFromTop: flyInFromTop,
		FlyInFromBottom: flyInFromBottom
	});
})();