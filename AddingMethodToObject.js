var obj = {
    name: "James",
    age: 31,
    isCool: false,
    friends: ["sandra", "tina"],
    add: function(x,y) {
        return x + y;
    }
}

// exactly same function with console.log()
obj.add(10,4);
// why dont you use just function?
// there is a few reasons
// 1. organizing : grouping the code logically
var dogSpace = {}; // make a empty object
dogSpace.speak = function() {
    return "woof";
}

cat.speak = function() {
    return "meow";
}

dog.speak();
cat.speak();

// 2. prevents namespace collisions which really just means we can group code together
// that menas that we can have properties and functions and methods
// that are named exactly the same way

// except they are stored in different objects so that they dont conflict