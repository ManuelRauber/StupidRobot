(function() {
	"use strict";
	
	var htmlAppender = WinJS.Class.define(
		null,
		null,
		{
			append: function (originhtml, div, htmlfragments) {
				/// <param name="originhtml">HTML page containing fragments</param>
				/// <param name="div" domElement="true">The div where to append the <paramref name="htmlfragments"/></param>
				/// <param name="htmlfragments" type="Array">an array of html fragments</param>
				/// <summary>Appends <paramref name="htmlfragments"/> to a <paramref name="div"/></summary>
				///
				//this operation can only be done once!
				var page = WinJS.UI.Pages.define(originhtml, {
					ready: function (element, options) {
						//iterate through the htmlfragment array
						for (var i = 0; i < htmlfragments.length ; i++) {
							var basicFragmentLoadDiv = document.getElementById(div);
							WinJS.UI.Fragments.renderCopy(htmlfragments[i], basicFragmentLoadDiv)
							.done(
								function () {
									console.log("successfully loaded fragment", "sample", "status");
									WinJS.UI.processAll();
								},
								function (error) {
									console.log("error loading fragment: " + error, "sample", "error");
								}
							);
						}
					},
					unload: function () {
						//TODO
					}
				});
			}
		});

	WinJS.Namespace.define('StupidRobot', {
		Utils: htmlAppender
	});
})();