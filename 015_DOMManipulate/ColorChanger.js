var checkClick = document.querySelector("button");
var backChange = document.querySelector("body");

var isWhite = false;

checkClick.addEventListener("click", function() {
    // backChange.style.backgroundColor = "pink";
    //or
    if (isWhite) {
        document.body.style.background = "pink";
        // isWhite = false;
    } else {
        document.body.style.background = "white";
        // isWhite = true;
    }

    //or
    isWhite = !isWhite;
});
