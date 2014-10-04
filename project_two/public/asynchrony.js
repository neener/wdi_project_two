
var request = new XMLHttpRequest;
request.open("GET", "http://127.0.0.1:4567/categories", true);
request.addEventListener("load", function() {
  	var response = request.response;
  	var arrayOfObjs = JSON.parse(response); 
  	console.log(arrayOfObjs); 	
 }); 
request.send(); 
var five = 2 + 2;
console.log(five); 

