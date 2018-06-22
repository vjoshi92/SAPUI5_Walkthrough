sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function(Controller,MessageToast,JSONModel) {
	"use strict";

	return Controller.extend("com.synconic.practice.SAPUI5_Walkthorugh.controller.Home", {
		
		onInit:function(){
			var oData = {
				recipient : {
					name:"World"
				}	
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},
		onPressHello: function(){
			MessageToast.show("Hello World");
		}
	});
});