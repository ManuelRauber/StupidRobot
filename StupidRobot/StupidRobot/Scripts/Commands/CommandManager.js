(function () {
	"use strict";
	
	var commandManagerClass = WinJS.Class.define(
    null,
    {
      init: function () {
        this.currentCommandNumber = 0;
        this.commandList = new Array();
      },

      addAction: function (griditem, commandType) {
        //delete all commands after the current pointer position
        //TODO: should clean old command classes: performance issue
        while (this.commandList.length != this.currentCommandNumber) {
          this.removeLastCommand();
        }
        //add the new command to the commandlist and execute it
        this.commandList.push(StupidRobot.Command(griditem, commandType));
        this.getLastCommand().doAction();

        this.currentCommandNumber++;
      },

      removeLastCommand: function () {
        this.commandList.pop();
      },

      getLastCommand: function () {
        return this.commandList[this.commandList.length - 1];
      },

      getCommand: function (commandNumber) {
        //return index - 1, because array starts at 0
        return this.commandList[commandNumber - 1];
      },

      undoCommand: function () {
        if (this.currentCommandNumber > 0) {
          this.getCommand(this.currentCommandNumber).undoAction();
          this.currentCommandNumber--;
        }
      },

      redoCommand: function () {
        if (this.currentCommandNumber < this.commandList.length) {
          this.getCommand(this.currentCommandNumber + 1).doAction();
          this.currentCommandNumber++;
        }
      },
    }
    );

  //load the CommandManager
	var commandManager = new commandManagerClass();
	commandManager.init();

  //public access
	WinJS.Namespace.define("StupidRobot", {
	  CommandManager: {
	    get: function () {
	      return commandManager;
	    }
	  }
	});
})();