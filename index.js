// 1. Code Along

// Let's first identify what parts of the code is repetitive


//superhero 1
let hero1 = superheroMaker9000("Spider-Man","web-slinging","New York City")

// Superhero 2
let hero2 = superheroMaker9000("Magneto","Magnetic Field Manipulation","Genosha")

// Superhero 3
let hero3 = superheroMaker9000("Wonder Woman","Super Strength","Themyscria")

// Now let's work together to make this code more modular. 
// We'll start by defining a function that can handle the repetitive parts of the superhero description.
function superheroMaker9000(heroName, heroPower, heroCity){
    console.log(`${heroName} uses ${heroPower} to protect ${heroCity}`)
}


// 2. Classwork

// Task 1: Add more superheroes!
// Create at least two more superheroes by calling your function for each one.
superheroMaker9000("Iron-Man","Laser Beams","New York City")

superheroMaker9000("Black Panther","Vibranium","Wakanda")


// Task 2: 5 members of the Sinister Six have escaped, and each villain is causing chaos in a different part of the city.
// You are tasked to modularize this code! 

// Step 1: Read through the following code and identify which parts are repetitive 

let villain5 = "Mysterio";
let location5 = "Broadway";
let chaos5 = "casting illusions to confuse and panic everyone";
console.log(villain5 + " has escaped from the Raft and is causing chaos in " + location5 + " by " + chaos5 + "!");

// Step 2: Define a function with an appropriate name. 
function theEvilVillain(name, location, crime){
    console.log(`${name} has escaped from ${location} and is terrorizing the folks by ${crime}!`)
}
 
// Step 5: Call the function below for Doctor Octopus, Electro, Vulture, Sandman, Mysterio, & Kraven the Hunter
theEvilVillain("Doctor Octupus","Time Square","destroying cars with his mechanical arms")
theEvilVillain("Electro","Central Park","overloading the city's power grid")
theEvilVillain("Vulture","Empire State Building","swooping down and grabbing people off the streets")
theEvilVillain("Sandman","Brooklyn Bridge","Turning The Bridge Into Sand")
theEvilVillain("Myterio","Broadway","casting illusions to confuse and panic")
// Step 6: Kraven the Hunter has also escaped, he's releasing and hunting wild animals in the Bronx Zoo
// Call the function below for Kraven the Hunter

theEvilVillain("Kraven The Hunter","Bronx Zoo", "Releasing Animals and Hunting Them")



// Task 3: You are tasked with collecting super hero stats and putting them in objects. 
// Modularize the code below so that when you call a function with inputs, it returns a super hero object. 

function superheroObject(theHero){
    console.log(theHero)
}


// Step 1: Read through the objects and identify the keys that repeat. 

let blackPanther = {
    secretIdentity: "T'Challa",
    city: "Wakanda",
    affiliation: "Avengers",
    archNemesis: "Killmonger",
    catchphrase: "Wakanda Forever"
};

let batman = {
    secretIdentity: "Bruce Wayne",
    city: "Gotham City",
    affiliation: "Justice League",
    archNemesis: "Joker",
    catchphrase: ["I am vengeance","I am the night","I am Batman"]
};


 
// Step 4: Add the function's logic to return the a super hero object.
superheroObject(batman)
superheroObject(blackPanther)

// Step 6: Call the function for Iron Man
let ironMan = {
    secretIdentity: "Tony Stark",
    city: "New York City",
    affiliation:"Avengers",
    archNemesis:"The Madarin",
    catchphrases: "I am Iron Man"
}


// Otherwise known as Tony Stark an Avenger stationed in NYC
// He's known to say "I am Iron Man", and his greatest beef is with The Mandarin
superheroObject(ironMan)
