(function() {
	"use strict";
	
	Crafty.c('TweenAnimation', {		
		init: function() {
			this.requires('Tween');
		},
		
		animation: function(animationClass, startAfterTrigger, followTrigger) {
			var animation = new animationClass(this, startAfterTrigger, followTrigger);

			animation.run();
		}
	});
})();