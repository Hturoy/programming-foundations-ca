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

function whatIDontLike(dislike){
    if(typeof dislike === "string"){
        console.log("I dont like " + dislike);
    }
    else{
        console.log("Please send in a string")
    }
}

whatIDontLike("60000kr bills")


// Question 5

function twoArguments(arg1, arg2){
    arg1 == Number(arg1)
    arg2 == Number(arg2)
    if(isNaN(arg1) || isNaN(arg2)){
        console.log("Invalid argument(s)")
        return "Invalid argument(s)"
    }else{
        const subtraction = arg2 - arg1;
        console.log(subtraction)
        return subtraction
    }
}
twoArguments ("2", "test");
twoArguments ("61", "130");

const subtraction = document.querySelector("#subtraction")
subtraction.innerHTML += "<ul>" + "<li>" + twoArguments(61, 130) + "</li>" + "</ul>";



// Question 6

const knapp = document.querySelector(".page")
const title = document.querySelector("title")
const background = document.querySelector("body")
const heading = document.querySelector("h1")
const list = document.querySelector (".games")
knapp.addEventListener("click", function(){
  title.innerHTML = "Updated title"
  background.style.background = "yellow"
  heading.style.color = "green"
  heading.style.fontFamily = "impact"
  heading.innerHTML = "<h1>" + "<a href='#'>" + "Programming Foundations Course Assignment" + "</a>" + "</h1>"
  list.style.listStyle = "none"
  list.style.padding = "0"
}
);



// Question 7

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];

const knapp2 = document.querySelector(".price")
const total = document.querySelector("#total")
knapp2.addEventListener("click", function(){
    sum = 0;
    for(toy of toys){
        for(property in toy){
        toy.price = Number(toy.price);
        sum += toy.price;
        break;
        }
    }
    console.log(sum)
    total.innerHTML=("The total is: " + sum + "$");
}
);
