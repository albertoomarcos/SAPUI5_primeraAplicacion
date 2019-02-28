sap.ui.define([
	"sap/m/Text"

], function (Text) {
	"use strict";
	alert("UI5 is ready...");

	new Text({
		text: "Hello World"
	}).placeAt("content");

});