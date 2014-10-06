require 'pry'
require_relative './db/connection'
require_relative './lib/category'
require_relative './lib/contact'

Category.delete_all
Contact.delete_all

friends = Category.create({name: "friends", id: 1})
frenemies = Category.create({name: "frenemies", id: 2})
enemies = Category.create({name: "enemies", id: 3})

Contact.create({name: "Sean", category_id: 1,
	age:29,
	address:"New Jersey",
	phone_number: "3338968764",
	picture: "http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30185.png&w=350&h=254"
})


Contact.create({name: "Jeff", category_id: 1,
	age:10,
	address:"blah",
	phone_number: "6668968764",
	picture: "http://www.comedyflops.com/images/cast/jeffery.jpg"
})

Contact.create({name: "Neel", category_id: 2,
	age:27,
	address:"flatiron",
	phone_number: "5558968764",
	picture: "http://www.centralfloridaheartcare.com/images/g-dr-neel-patel.png"
})

Contact.create({name: "Jim", category_id: 3,
	age:27,
	address:"flatiron usa",
	phone_number: "5556968764",
	picture: "http://upload.wikimedia.org/wikipedia/commons/7/7f/Jim_Morrison_1969.JPG"
})
