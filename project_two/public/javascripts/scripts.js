
window.addEventListener('load', function(){
	var xhr = new XMLHttpRequest;

	xhr.open('GET', 'http://127.0.0.1:4567/categories', true);

	xhr.addEventListener('load', function() {
		var response = JSON.parse(xhr.response)
		// We are iterating over the data, we are NOT GRABBING IT! 
		// This implies we have the data, else we could not iterate over it.

		for(var i = 0; i < response.length; i++) {
			var category = response[i];
			handleCategory(category);
		}
	});
	
	xhr.send();
});

function handleCategory(cat) {
	var categoryId = cat["id"]; 

	var request = new XMLHttpRequest;
	request.open('GET', 
		'http://127.0.0.1:4567/categories/' + categoryId, 
		true
		);

	request.addEventListener("load", function() {
		var respondez = request.response;
		var category = JSON.parse(respondez);
		var contacts = category.contacts;  

		var contactsDropdown = document.createElement("ul");

		contacts.forEach(function(contact) {
			console.log(category.name)
			var contactID = contact.id;
			var contactLi = document.createElement("li");
			var contactSection = document.createElement("section");

			var picture = document.createElement("img");
			picture.src = contact.picture;
			contactSection.appendChild(picture);

			var contactHeader = document.createElement("h1");
			contactHeader.innerText = contact.name;	
			contactSection.appendChild(contactHeader);

			// var emailPara = document.createElement("p");
			// var emailSpan = document.createElement("span");
			// emailSpan.innerText = "Email: ";
			// var emailLink = document.createElement("a");
			// emailLink.href = "mailto:" + contact.email;
			// emailLink.innerText = contact.email;
			// emailPara.appendChild(emailSpan);
			// emailPara.appendChild(emailLink);
			// contactSection.appendChild(emailPara);
			
			var agePara = document.createElement("p");
			var ageSpan = document.createElement("span");
			ageSpan.innerText = "Age: ";
			var age = document.createTextNode(contact.age);
			agePara.appendChild(ageSpan);
			agePara.appendChild(age);
			contactSection.appendChild(agePara);

			var addrPara = document.createElement("p");
			var addrSpan = document.createElement("span");
			addrSpan.innerText = "Address: ";
			var addr = document.createTextNode(contact.address);
			addrPara.appendChild(addrSpan);
			addrPara.appendChild(addr);
			contactSection.appendChild(addrPara);

			var digitsPara = document.createElement("p");
			var digitsSpan = document.createElement("span");
			digitsSpan.innerText = "Phone Number: "
			digits = document.createTextNode(contact.phone_number);
			digitsPara.appendChild(digitsSpan);
			digitsPara.appendChild(digits);
			contactSection.appendChild(digitsPara);

			contactLi.appendChild(contactSection);
			contactsDropdown.appendChild(contactLi);
			var removeButton = document.createElement('button'); 
			removeButton.appendChild(document.createTextNode("remove"));
			removeButton.addEventListener('click', function(e){
				var thisbutton = e.target;
				var parentLi = thisbutton.parentNode;
				var grandParentUl = parentLi.parentNode;
				grandParentUl.removeChild(parentLi);
				
				request.open('DELETE', 
				'http://127.0.0.1:4567/categories/' + contactID, 
				true
				);
				//right here you make an ajax call
				//to delete this contact with contact id of contactID
				//using route /contacts/ + contactID



			}); //end of remove add event listener

			var formButton = document.querySelector('myform');
			myform.addEventListener('click', function(e){
				var name = document.querySelector('name');
	  			var address = document.querySelector('address');
	  			var age = document.querySelector('age');
	  			var phone = document.querySelector('phone');
	  			var picture = document.querySelector('picture');

	  			var newLi = document.createElement('LI');
	  			var list = document.querySelector('li');

	  			list.appendChild(newLi);

	  			var response = new XMLHttpRequest();
	  			response.open("POST", '/contacts', true);
	  			response.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	  			response.send(JSON.stringify({name: name,
	  				address: address,
	  				age: age,
	  				phone: phone,
	  				picture: picture
	  			}));
			});


			//contactListInQuestion.parentNode.insertBefore(contactsDropdown, contactListInQuestion.nextSibling); 
			//button.removeEventlistener('click');
			// e.target.addEventListener('click', function(e){ 
			//  //do stuff to hide the list here });
			// });
		}); //end of foreach
		
		var div = document.createElement("div");
		var title = document.createElement("label");
		title.innerText = category.name
		div.appendChild(title);
		div.appendChild(contactsDropdown);
		document.body.appendChild(div);

	}); //end of request.addeventlistener load
	request.send();
} //end of function handlecategory




// 	var formButton = document.querySelector('thebutton');

// 	formButton.addEventListener('click', function(e){
//   	//stop form from submitting through the browser the default way
//   	e.preventDefault();



//   	var newLi = document.createElement('li');
//   		for(var i = 0; i < response.length; i++){
//   			var name = document.querySelector('name').value;
//   			var address = document.querySelector('address').value;
//   			var age = document.querySelector('age').value;
//   			var phone = document.querySelector('phone').value;
//   			var picture = document.querySelector('picture').value;
//   		};
//   	//use loop like before to add the right elements and information to the new li
//   	var list = document.querySelector('');

//   	list.appendChild(newLi);

//   	//send data to server with POST
//   	var req = new XMLHttpRequest();
//   	req.open("post", '/contacts', true);
//   	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   	req.send(JSON.stringify({name: name, 
// 	    address: address,
// 	    age: age,
// 	    phone: phone,
// 	    picture: picture
// 	}));

// }));


//   //clear out the form here

// });


