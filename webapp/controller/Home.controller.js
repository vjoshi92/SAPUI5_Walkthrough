sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("com.synconic.practice.SAPUI5_Walkthorugh.controller.Home", {
		onPressHello: function(){
			MessageToast.show("Hello World");
		}
	});
});