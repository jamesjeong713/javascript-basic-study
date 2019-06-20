var todos = ["initial value"];
var input = prompt("enter keyword");

while(input != "quit") {
    if (input==="new") {
        add();
    }
    else if (input === "list") {
        listUp();
    }            
    else if (input === "d") {
        delElement();
    }
    input = prompt("Are you going to add more? Enter the keyword");
}

function add() {
    var newTodo = prompt("Enter value to add your list")
    todos.push(newTodo);
}

function delElement() {
    var delTodo = prompt("Enter number to delete");
    todos.splice(delTodo, 1);
}

function listUp() {
    console.log("---------------");
    for (var i = 0; i < todos.length; i++)
        console.log(i + ": " + todos[i]);
    console.log("---------------");
}