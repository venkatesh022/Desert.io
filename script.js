let person = {
    name : 'Venkatesh',
    age : 35
}
for(let key in person){
    console.log(person[key]);
}
console.log('weight' in person);