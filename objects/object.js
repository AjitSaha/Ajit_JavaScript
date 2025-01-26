let loc=Symbol("abc")
const obj={
    "name":"ajit",
    "full name":"Ajit Saha",
    age:24,
    [loc]:"Karnataka"
}

const {name:n}=obj
console.log(name)
// obj.ger=function() {
//     console.log("he;ll")
    
// }

// console.log(obj.ger());

// console.log(obj.name);
// console.log(obj["full name"]);
// console.log(typeof obj[loc]);
// console.log(typeof loc);


