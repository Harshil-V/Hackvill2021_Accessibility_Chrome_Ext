function getPageDetails(callback) {
	console.log("Im at event.js")
	// Inject the content script into the current page 
	chrome.tabs.executeScript(null, { file: './scripts/content.js' });
	// Perform the callback when a message is received from the content script
	chrome.runtime.onMessage.addListener(function(message)  { 
		// Call the callback function
		textSelected=message;
		console.log(textSelected.summary);
		textToSpeech(textSelected.summary);
	}); 
};
