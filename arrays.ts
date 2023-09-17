interface Person {
    name: string;
    lastName: string;
    age: number;
    is_present: boolean;
}

const values: number[]= [];
const names: string[]= []
const contact: Person[]= []; 

values.push(10)
// values.push("mel")

names.push("melina")
// names.push(20)

contact.push({
    name: "foolan",
    lastName: "bisar",
    age: 10,
    is_present: false,
})

interface Animal {
    name: string,
    breed: string
}

const dog: Animal= {
    name: "negro",
    breed: "german",
}
const wolf: Animal= {
    name: "black",
    breed: "asian",
}
const beer: Animal= {
    name: "browny",
    breed: "austrailian"
}
// list kole animals o bekhaim :
function my_zoo(animals: Animal[]){
    console.log(animals)
}
const list = [
    dog,
    wolf,
    beer
]

my_zoo(list)