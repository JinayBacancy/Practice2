let fun1 = (gen, funo) => {
    console.log(`this is fun1 ${gen}`);
    funo();
}

let fun2 = () => {
    console.log("Hello world2");
}

fun1("male", fun2);