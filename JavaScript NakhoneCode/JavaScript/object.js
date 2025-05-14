//by nakhonecode

const person ={
    name: 'Simon',
    age: 20,
    city: 'New York',
    showInFo: function(){
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`
    },
}

console.log(person.name)
console.log(person.showInFo())

// Display the object data on the HTML page
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
    <p>Name: ${person.name}</p>
    <p>Age: ${person.age}</p>
    <p>City: ${person.city}</p>
`;

const output_test2 = document.getElementById("output2");
output_test2.innerHTML = 
`
Name: ${person.name},
Age: ${person.age},
City: ${person.city}
`;