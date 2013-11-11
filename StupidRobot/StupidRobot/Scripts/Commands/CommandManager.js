(function () {
	"use strict";
	
	var commandManagerClass = WinJS.Class.define(
    null,
    {
      init: function () {
        this.currentCommandNumber = 0;
        this.commandList = new Array();
      },

      addCommand: function (command) {
        //delete all commands after the current pointer position
        while (this.commandList.length != this.currentCommandNumber) {
          this.removeLastCommand();
        }
        this.commandList.push(command);
        this.currentCommandNumber++;
      },

      removeCommand: function (commandNumber) {
        this.commandList.splice(commandNumber - 1, 1);
      },

      removeLastCommand: function () {
        this.commandList.pop();
      },

      getCommand: function (commandNumber) {
        //return index - 1, because array starts at 0
        return this.commandList[commandNumber - 1];
      },

      undoCommand: function () {
        if (this.currentCommandNumber > 0) {
          this.getCommand(this.currentCommandNumber).undo();
          this.currentCommandNumber--;
        }
      },

      redoCommand: function () {
        if (this.currentCommandNumber < this.commandList.length) {
          this.getCommand(this.currentCommandNumber + 1).redo();
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