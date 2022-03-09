// console.log("Objects")
// for(let i=0; i<6; i++) {
//     console.log(i)
// }

/**
 * objects have key value pairs and have
 * key value pairs
 * javascript is a huge object
 * /**
 * if you want to access values in keys use
 * 1. dot notation
 * 2. square bracket notation
 * console.log(person:name)
 * console.log(person['name])
 */
 
const person= {
    name: "Taroj", 
    place: "Houston",
    age: 43,
    doesWorkOut: true,
    email: "tkhan@khan.com",
    favFoods: ["Italian", "Middle Eastern", "American"]
}
console.log(person)

// // To add to an object you can use both previous ways
// person.suburb = "Richmond"
// person.height = "6Feet"
// console.log(person)

// // To remove a property from an object 
// delete person.suburb
// delete person.height

// // To edit a property of an object
// person.doesWorkOut = false


for(let key in person){
    console.log(person[key])
}
for(let value in person){
    console.log(person[value])
}

