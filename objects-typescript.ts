interface City {
    name: string;
    weather: number;
}
interface Person {
    name: string;
    lastName: string;
    age: number;
    is_present: boolean;
}

const city: City = {
    name: "Tehran",
    weather: 10,
}
const city2: City = {
    name: "Zanjan",
    weather: 17,
}

const person: Person= {
    name: "babak",
    lastName: "mohseni",
    age: 29,
    is_present: false,
}
const person2: Person= {
    name: "maryam",
    lastName: "vahedi",
    age: 34,
    is_present: true,
}

function greet(people){
    console.log("welcome", people.name)
}
greet(person)