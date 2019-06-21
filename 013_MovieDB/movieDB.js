var movies = [
    {
        title: "In Bruges",
        isWatch : true,
        rating: 5
    },
    {
        title: "Frozen",
        isWatch: false,
        rating: 4.5
    },
    {
        title: "Breaking bad",
        isWatch: false,
        rating: 5
    },
    {
        title: "Extreme jobs",
        isWatch: true,
        rating: 4.5
    }
]
// IMPORTANT!
function buildString(movie) {
    var result = "You have ";

    if (movie.isWatch) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars"
    
    return result;
}

movies.forEach(function(movie) {
    console.log(buildString(movie));
});