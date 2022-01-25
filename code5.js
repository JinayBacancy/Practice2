// let user = {
//     name: "John",
//     age: 30
// };

// let clone = Object.assign({}, user);
// console.log(clone === user);
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);

console.log(user.sizes == clone.sizes); // true, same object

// user and clone share sizes
user.sizes.width++; // change a property from one place
console.log(clone.sizes.width); // 51, see the result from the other