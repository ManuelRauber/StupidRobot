(function () {
	"use strict";
	
	var commandManagerClass = WinJS.Class.define(
    null,
    {
      init: function () {
        this.currentCommandIndex = 0;
        this.commandList = [];
        this.gridItem = [];
      },

      addCommand: function (command, gridItem) {
        //check if there are elements after the current pointer
        if (this.commandList.length != this.currentCommandIndex) {
          for (var i = 1 ; i <= this.commandList.length - this.currentCommandIndex ; i++) {
            this.removeCommand(this.currentCommandIndex + i);
          }
        }
        this.commandList.push(command);
        this.gridItem.push(gridItem);
        this.currentCommandIndex++;
        command.performActionOn(gridItem);
      },

      removeCommand: function (index) {
        this.commandList.splice(index, 1);
        this.gridItem.splice(index, 1);
      },

      getCommand: function (index) {
        return this.commandList[index];
      },

      getGridItem: function (index) {
        return this.gridItem[index];
      },

      undoCommand: function () {
        if (this.currentCommandIndex > 0) {
          this.getCommand(this.currentCommandIndex).undo(this.getGridItem(this.currentCommandIndex));
          this.currentCommandIndex--;
        }
      },

      redoCommand: function () {
        if (this.currentCommandIndex < this.commandList.length) {
          this.getCommand(this.currentCommandIndex + 1).redo(this.getGridItem(this.currentCommandIndex + 1));
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