var comments = {};
comments.data = ["Good job!", "bye", "lame..."];

function print(arr) {
    arr.forEach(function(el) {
        console.log(el);
    });
}
print(comments.data);

// this refers to comments object
comments.print = function() {
    this.data.forEach(function(el) {
        console.log(el);
    });
}