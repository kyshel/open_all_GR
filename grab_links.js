console.log('Multi Click started');

links=[]
sections = document.getElementsByClassName("r")

for (var i = 0; i < sections.length; i++) {
	link=sections[i].getElementsByTagName('a')[0].href
    //console.log(link); 
    links = links.concat(link);
}
console.log(links)

links_json=JSON.stringify(links);
//console.log(links_json);

document.ondblclick = function(){
	chrome.runtime.sendMessage({greeting:links_json}, function(response) {
		console.log(response.farewell);
	});
	add_border(sections)
};

function add_border(sections){
	for (var i = 0; i < sections.length; i++) {
		sections[i].style.border = "1px solid red"
	}
}






