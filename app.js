// Same keys and values
function createInstructor(firstName, lastName){
    return {
        firstName, 
        lastName
    }
}

// Computer Propery Names
let favoriteNumber = 42;

const instructor = {
    firstName: "Colt"
    [favoriteNumber] = "That is my favorite!"
}

// Object methods
// const instructor = {
//     firstName: "Colt",
//     sayHi(){
//         return "Hi!";
//     }, 
//     sayBye(){
//         return this.firstName + " says bye!";
//     }
// }

//CreateAnimal function
function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}