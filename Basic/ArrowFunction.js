/*
Arrow function -> is helpfull with this keyword
*/
/// 1st form also called Anonimus function
const sumaryFunction =   function (username, usernumber){
    return ('Name is:' + username + 'usernumber is:' + usernumber)
}
console.log( sumaryFunction("sample", 62))

const sumaryFunction2 = (username, usernumber) => {
    return ('Name is:' + username + 'usernumber is:' + usernumber)
}

console.log( sumaryFunction2("sample2", 63))
// Arrow function sample transformation 1
const add = (num1, num2) => { return num1 + num2 } 
// Arrow function sample transformation 2
const add1 = (num1, num2) =>  num1 + num2 
// Arrow function sample transformation 3 with one paream
const add2 = (num1) =>  num1 + 1 
const add3 = num1 =>  num1 + 1 
console.log( 'sum =' + add(1,4))
console.log( 'sum =' + add1(8,4)) 
console.log( 'sum =' + add2(8)) 
console.log( 'sum =' + add3(10)) 

// Empty patam
const total = () =>  10 + 1 
console.log( 'sum =' + total()) 