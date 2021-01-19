// Question 1

var outOfStock = true

if (outOfStock === true) {
    console.log("This is in stock")
}

else {
    console.log("This is not in stock")
}



// Question 2

for (var i = 15; i <= 25; i++) {
    if (i === 17 || i === 20)
    console.log(i)
};



// Question 3

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

for (game of games){
    for(property in game){
        if(game.rating <= 3.5){
            document.querySelector(".games").innerHTML += "<li>" + game.title +": " + game.rating + "</li>";
            break; 
        }
    }
}


// Question 4

function whatIDontLike(lemon){
    if(lemon === String){
        console.log("I dont like" + lemon)
    }

    else{
        console.log("Please send in a string")
    }
}