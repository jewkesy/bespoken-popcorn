"use strict";

var console = require('tracer').colorConsole();
const vdSDK = require("virtual-device-sdk");
const locale = "en-IN";
const voiceId = "Joey"

const token = "f7e91d64-0477-427c-95b6-15cade37a323"
const skipSST = false;
const debugMode = true;

const virtualDevice_ENUS = new vdSDK.VirtualDevice(token, "en-US", "Joey", skipSST);
const virtualDevice_ENGB = new vdSDK.VirtualDevice(token, "en-GB", "Brian", skipSST);
const virtualDevice_ENIN = new vdSDK.VirtualDevice(token, "en-IN", "Raveena", skipSST);
const virtualDevice_ENAU = new vdSDK.VirtualDevice(token, "en-AU", "Russell", skipSST);

const enGame = ["open popcorn quiz", "false", "false", "false", "false", "false", "no"];

virtualDevice_ENGB.batchMessage(enGame, debugMode).then((result) => {
	// if (debugMode) console.debug(JSON.stringify(result, null, 2));
	for (var i = 0; i < result.length; i++) {
		console.info(result[i].message);
		if (!skipSST) console.log(result[i].transcript);
		if (result[i].card) console.log(result[i].card.mainTitle);
	}

	virtualDevice_ENUS.batchMessage(enGame, debugMode).then((result) => {
		// if (debugMode) console.debug(JSON.stringify(result, null, 2));
		for (var i = 0; i < result.length; i++) {
			console.info(result[i].message);
			if (!skipSST) console.log(result[i].transcript);
			if (result[i].card) console.log(result[i].card.mainTitle);
		}
	}).then(() => {
		virtualDevice_ENIN.batchMessage(enGame, debugMode).then((result) => {
			// if (debugMode) console.debug(JSON.stringify(result, null, 2));
			for (var i = 0; i < result.length; i++) {
				console.info(result[i].message);
				if (!skipSST) console.log(result[i].transcript);
				if (result[i].card) console.log(result[i].card.mainTitle);
			}
		}).then(() => {
			virtualDevice_ENAU.batchMessage(enGame, debugMode).then((result) => {
				// if (debugMode) console.debug(JSON.stringify(result, null, 2));
				for (var i = 0; i < result.length; i++) {
					console.info(result[i].message);
					if (!skipSST) console.log(result[i].transcript);
					if (result[i].card) console.log(result[i].card.mainTitle);
				}
			}).catch((e) => {
				console.error(e);
			});

		}).catch((e) => {
			console.error(e);
		});
	}).catch((e) => {
		console.error(e);
	});
}).catch((e) => {
	console.error(e);
});
