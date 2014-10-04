
/// 1, 

window.addEventListener('load', function(){

	///	2, 

	var xhr = new XMLHttpRequest;

	xhr.open('GET', 'http://127.0.0.1:4567/categories', true);

	xhr.addEventListener('load', function() {
		var response = JSON.parse(xhr.response)
		var ul = document.querySelector("ul"); // "<ul></ul>"

		/// 3, We are iterating over the data, we are NOT GRABBING IT! 
		// This implies we have the data, else we could not iterate over it.

		for(var i = 0; i < response.length; i++) {
			var name = response[i]["name"];
			var id = response[i]["id"]; 
			var button = document.createElement("button");
			button.id = id;
			button.innerText = name;
			button.addEventListener('click', function(e) {

				var contactListInQuestion = e.srcElement; 
				var request = new XMLHttpRequest;
				request.open('GET', 
					'http://127.0.0.1:4567/categories/' + contactListInQuestion.id, 
					true
				);

				request.addEventListener("load", function() {
					var respondez = request.response;
					var category = JSON.parse(respondez);
					var contacts = category.contacts;  

					var contactsDropdown = document.createElement("ul");

					for (var janine = 0; janine < contacts.length; janine++) {
						var contact = contacts[janine]; 
						var contactLi = document.createElement("li");
						var contactSection = document.createElement("section");

						var picture = document.createElement("img");
						picture.src = contact.picture;
						contactSection.appendChild(picture);

						var contactHeader = document.createElement("h1");
						contactHeader.innerText = contact.name;	
						contactSection.appendChild(contactHeader);
							
						var emailPara = document.createElement("p");
						var emailSpan = document.createElement("span");
						emailSpan.innerText = "Email: ";
						var emailLink = document.createElement("a");
						emailLink.href = "mailto:" + contact.email;
						emailLink.innerText = contact.email;
						emailPara.appendChild(emailSpan);
						emailPara.appendChild(emailLink);
						contactSection.appendChild(emailPara);
						
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
					}

					contactListInQuestion.parentNode.insertBefore(contactsDropdown, contactListInQuestion.nextSibling); 

				});
				request.send();

			});
			ul.appendChild(button);
		}



	});
	xhr.send();
});








