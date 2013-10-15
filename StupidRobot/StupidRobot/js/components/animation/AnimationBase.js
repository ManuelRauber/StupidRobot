(function () {
	"use strict";

	var animationBase = WinJS.Class.define(
		function (element, startAfterTrigger, followTrigger) {
			this._element = element;
			this._startAfterTrigger = startAfterTrigger;
			this._followTrigger = followTrigger;
		},
		{
			_prepare: function() {
				
			},

			run: function() {
				this._prepare();

				var me = this;

				if ((me._startAfterTrigger !== "undefined")
					&& (me._startAfterTrigger != null)) {
					me._element.bind(me._startAfterTrigger, function () {
						me._element.unbind(me._startAfterTrigger);
						me._action();
						me._setUpFollowTrigger(me);
					});

					return;
				}

				this._action();
				this._setUpFollowTrigger(this);
			},
			
			_setUpFollowTrigger: function(me) {
				if ((me._followTrigger !== "undefined")
					&& (me._followTrigger != null)) {
					me._element.bind('TweenEnd', function() {
						me._element.unbind('TweenEnd');
						Crafty.trigger(me._followTrigger);
					});
				}
			},
			
			_action: function() {
				
			}
		},
		null);

	WinJS.Namespace.define('StupidRobot.Animations', {
		AnimationBase: animationBase
	});
})();