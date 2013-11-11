(function () {
	"use strict";
	
	var commandManagerClass = WinJS.Class.define(
    null,
    {
      init: function () {
        this.currentCommandIndex = -1;
        this.commandList = new Array();;
      },

      addCommand: function (command) {
        //check if there are elements after the current pointer
        if (this.commandList.length != this.currentCommandIndex + 1) {
          for (var i = 1 ; i <= this.commandList.length - this.currentCommandIndex + 1 ; i++) {
            this.removeCommand(this.currentCommandIndex + 1 + i);
          }
        }
        this.commandList.push(command);
        this.currentCommandIndex++;
      },

      removeCommand: function (index) {
        this.commandList.splice(index, 1);
      },

      getCommand: function (index) {
        return this.commandList[index];
      },

      undoCommand: function () {
        if (this.currentCommandIndex > -1) {
          this.getCommand(this.currentCommandIndex).undo();
          this.currentCommandIndex--;
        }
      },

      redoCommand: function () {
        if (this.currentCommandIndex < this.commandList.length) {
          this.getCommand(this.currentCommandIndex + 1).redo();
          this.currentCommandIndex++;
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