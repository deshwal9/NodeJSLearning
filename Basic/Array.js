// Topic Array and Array Method
//  need this cmd to reach it here: @ cd /Basic/Array.js 
const hobbies = ['Playing', 'Singing', 'Reading']
for (let hobby in hobbies){
    console.log(hobby)
}
// output ->  0, 1, 2
for (let hobby of hobbies){
    console.log(hobby)
}
// output -> Playing, Singing, Reading

// ======= Array common function =======
console.log(hobbies.map(hobby => {
    return 'Hobbies: ' + hobby
}))
console.log(hobbies.map(hobby => 'Hobbies2: ' + hobby ))
// output -> [ 'Hobbies2: Playing', 'Hobbies2: Singing', 'Hobbies2: Reading' ]

// ======= Array Details =======
// Array is reference in node 
hobbies.push('Programing')

console.log(hobbies.map(hobby => {
    return 'Hobbies:3 ' + hobby
}))
// output -> ['Hobbies:3 Playing', 'Hobbies:3 Singing', 'Hobbies:3 Reading','Hobbies:3 Programing']

// #region Lifecycle
// #endregion

// ======= Array coppying to create new one =======
// Eg:Spread Operater -> Extracted the item from the Array, Or pull out element or property form an Array. 
const newArray = hobbies.slice();

// Eg: Rest Operater -> Merging the itenm into the array 
const newArray2 = [...hobbies] 
// for the above syntex the the function can handel n number of pareameter to append the array 
const  toArray = (...args) => {
    return args
}
console.log(toArray(1,2,3,4,5));