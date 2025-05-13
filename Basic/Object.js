// Object sample basic 
const person = {
    name: "Ankit",
    age: "35",
    write: () => { 
        console.log( 'UserName: ' + this.name + ', ' + 'Age: ' + this.age) 
     },
     write2() { 
        console.log( 'UserName: ' + this.name + ', ' + 'Age: ' + this.age) 
     }
}
console.log(person)
person.write()  // return  -- UserName: undefined, Age: undefined

person.write2() 