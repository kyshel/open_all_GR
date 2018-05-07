chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	//console.log(message),
	open(message),
  	sendResponse({farewell:"goodbye"});
});

function open(message){
		console.log(message.greeting);
		links = JSON.parse(message.greeting);
	for (var i = 0; i < links.length; i++) {
		console.log(links[i]);
		chrome.tabs.create({
			url: links[i],
			active : false
		})
	}

}