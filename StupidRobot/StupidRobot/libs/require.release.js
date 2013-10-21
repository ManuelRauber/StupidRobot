(function () {
	"use strict";

	var filesToInclude = [
		'/Compressed/Code.js'
	];

	for (var i = 0; i < filesToInclude.length; i++) {
		var fileToInclude = document.createElement('script');
		fileToInclude.setAttribute('type', 'text/javascript');
		fileToInclude.setAttribute('src', filesToInclude[i]);
		document.getElementsByTagName('head')[0].appendChild(fileToInclude);
	}
})();