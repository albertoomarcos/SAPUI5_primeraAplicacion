sap.ui.jsview("sapui5_primeraaplicacion.masterView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5_primeraaplicacion.masterView
	*/ 
	getControllerName : function() {
		return "sapui5_primeraaplicacion.masterView";
	},

	createContent : function(oController) {
		var boton1 = new sap.ui.commons.Button(
				{
					text: "Prueba de boton",
					tooltip: "Esto es un test de tooltip",
					press: [oController.butt, oController]
					
				});
		var boton2 = new sap.ui.commons.Button(
				{
					text: "Prueba de boton2",
					tooltip: "Esto es un test de tooltip",
					press: [oController.butt2, oController]
					
				});
			
		var boton3 = new sap.ui.commons.Button(
				{
					text: "Prueba de boton3",
					tooltip: "Esto es un test de tooltip",
					press: [oController.butt3, oController]
					
				});
		boton1.placeAt("content");
		boton2.placeAt("content");
		boton3.placeAt("content");
	}

});
