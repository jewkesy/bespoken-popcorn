"use strict";

const console = require('tracer').colorConsole();
const vdSDK = require("virtual-device-sdk");

const token = "f7e91d64-0477-427c-95b6-15cade37a323"
const skipSST = true;
const debugMode = true;

const virtualDevice_ENUS = new vdSDK.VirtualDevice(token, "en-US", "Joey", skipSST);
const virtualDevice_ENGB = new vdSDK.VirtualDevice(token, "en-GB", "Brian", skipSST);
const virtualDevice_ENIN = new vdSDK.VirtualDevice(token, "en-IN", "Raveena", skipSST);
const virtualDevice_ENAU = new vdSDK.VirtualDevice(token, "en-AU", "Russell", skipSST);
const virtualDevice_ENCA = new vdSDK.VirtualDevice(token, "en-CA", "Matthew", skipSST);

const virtualDevice_DEDE = new vdSDK.VirtualDevice(token, "de-DE", "Hans", skipSST);
const virtualDevice_FRFR = new vdSDK.VirtualDevice(token, "fr-FR", "Mathieu", skipSST);
const virtualDevice_FRCA = new vdSDK.VirtualDevice(token, "fr-CA", "Mathieu", skipSST);
const virtualDevice_ITIT = new vdSDK.VirtualDevice(token, "it-IT", "Mathieu", skipSST);
const virtualDevice_JAJP = new vdSDK.VirtualDevice(token, "ja-JP", "Takumi", skipSST);

const enGame = ["open popcorn quiz", "false", "false", "false", "false", "false", "no"];
const deGame = ["starte popcorn quiz", "falsch", "falsch", "falsch", "falsch", "falsch", "nein"];
const frGame = ["lance popcorn quiz", "faux", "faux", "faux", "faux", "faux", "non"];
const itGame = ["apri popcorn quiz", "falso", "falso", "falso", "falso", "falso", "no"];
const jaGame = ["ポップコーンクイズを開いて", "バツ", "バツ", "バツ", "バツ", "バツ", "いいえ"];

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
			}).then(() => {
				virtualDevice_ENCA.batchMessage(enGame, debugMode).then((result) => {
					// if (debugMode) console.debug(JSON.stringify(result, null, 2));
					for (var i = 0; i < result.length; i++) {
						console.info(result[i].message);
						if (!skipSST) console.log(result[i].transcript);
						if (result[i].card) console.log(result[i].card.mainTitle);
					}
				}).then(() => {
					virtualDevice_DEDE.batchMessage(deGame, debugMode).then((result) => {
						// if (debugMode) console.debug(JSON.stringify(result, null, 2));
						for (var i = 0; i < result.length; i++) {
							console.info(result[i].message);
							if (!skipSST) console.log(result[i].transcript);
							if (result[i].card) console.log(result[i].card.mainTitle);
						}
					}).then(() => {
						virtualDevice_FRFR.batchMessage(frGame, debugMode).then((result) => {
							// if (debugMode) console.debug(JSON.stringify(result, null, 2));
							for (var i = 0; i < result.length; i++) {
								console.info(result[i].message);
								if (!skipSST) console.log(result[i].transcript);
								if (result[i].card) console.log(result[i].card.mainTitle);
							}
						}).then(() => {
							virtualDevice_FRCA.batchMessage(frGame, debugMode).then((result) => {
								// if (debugMode) console.debug(JSON.stringify(result, null, 2));
								for (var i = 0; i < result.length; i++) {
									console.info(result[i].message);
									if (!skipSST) console.log(result[i].transcript);
									if (result[i].card) console.log(result[i].card.mainTitle);
								}
							}).then(() => {
								virtualDevice_ITIT.batchMessage(itGame, debugMode).then((result) => {
									// if (debugMode) console.debug(JSON.stringify(result, null, 2));
									for (var i = 0; i < result.length; i++) {
										console.info(result[i].message);
										if (!skipSST) console.log(result[i].transcript);
										if (result[i].card) console.log(result[i].card.mainTitle);
									}
								}).then(()=>{
									virtualDevice_JAJP.batchMessage(jaGame, debugMode).then((result) => {
										// if (debugMode) console.debug(JSON.stringify(result, null, 2));
										for (var i = 0; i < result.length; i++) {
											console.info(result[i].message);
											if (!skipSST) console.log(result[i].transcript);
											if (result[i].card) console.log(result[i].card.mainTitle);
										}
									}).then(()=>{
										console.log("DONE");
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
	}).catch((e) => {
		console.error(e);
	});
}).catch((e) => {
	console.error(e);
});
