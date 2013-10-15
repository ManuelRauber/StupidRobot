// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function() {
	"use strict";

	WinJS.Binding.optimizeBindingReferences = true;

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;

	addSettingsFlyout();

	app.onactivated = function(args) {
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
				// TODO: This application has been newly launched. Initialize
				// your application here.
			} else {
				// TODO: This application has been reactivated from suspension.
				// Restore application state here.
			}
			args.setPromise(WinJS.UI.processAll());
		}
	};

	app.oncheckpoint = function(args) {
		// TODO: This application is about to be suspended. Save any state
		// that needs to persist across suspensions here. You might use the
		// WinJS.Application.sessionState object, which is automatically
		// saved and restored across suspension. If you need to complete an
		// asynchronous operation before your application is suspended, call
		// args.setPromise().
	};

	function addSettingsFlyout() {
		var settingsPane = Windows.UI.ApplicationSettings.SettingsPane.getForCurrentView();
		settingsPane.addEventListener("commandsrequested", onCommandsRequests);
	}

	function onCommandsRequests(e) {
		var privacyPolicyCommand = new Windows.UI.ApplicationSettings.SettingsCommand('privacyPolicy', 'Privacy policy', function(command) {
			Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri('http://cheeseware.de/datenschutzerklarung'));
		});

		var settingsCommand = new Windows.UI.ApplicationSettings.SettingsCommand('settings', 'Settings', function (command) {
			StupidRobot.Settings.showFlyout();
		});

		var imprintCommand = new Windows.UI.ApplicationSettings.SettingsCommand('imprint', 'Imprint', function(command) {
			WinJS.UI.SettingsFlyout.showSettings('imprint', '/pages/imprint/imprint.html');
		});

		e.request.applicationCommands.append(privacyPolicyCommand);
		e.request.applicationCommands.append(settingsCommand);
		e.request.applicationCommands.append(imprintCommand);
	}

	app.start();
})();