// function recommendMovie() {

//     let movie = document.getElementById("movieInput").value.toLowerCase().trim();

    // if (movie === "avengers") {
    //     let recommendations = ["Iron Man", "Thor", "Captain America", "Black Panther"];
    //     document.getElementById("result").innerText =
    //         "You might like " + recommendations.join(",")+"!";
    // }

    // else if (movie === "batman") {
    //     document.getElementById("result").innerText =
    //         "You might like Scarface!";
    // }

    // else if (movie === "interstellar") {
    //     document.getElementById("result").innerText =
    //         "You might like Endgame!";
    // }

    // else if (movie === "godfather") {
    //     document.getElementById("result").innerText =
    //         "You might like Goodfellas!";
    // }
    //  else if (movie === "titanic") {
    //     document.getElementById("result").innerText =
    //         "You might like The Notebook!";
    // }

    // else if (movie === "joker") {
    //     document.getElementById("result").innerText =
    //         "You might like The Dark Knight!";
    // }
    // else {
    //     document.getElementById("result").innerText =
    //         "Sorry, we don't have a recommendation for that movie.";
    // }

// let movies = {

//     avengers: {
//         recommendation: ["Spiderman", "Iron Man", "Thor"],
//         rating: 8.0,
//         genre: "Action",
//         poster: "https://via.placeholder.com/300x450"
//     },

//     batman: {
//         recommendation: ["Joker", "The Dark Knight"],
//         rating: 9.0,
//         genre: "Action",
//         poster: "https://via.placeholder.com/300x450"
//     },

//     interstellar: {
//         recommendation: ["Inception", "The Martian"],
//         rating: 8.7,
//         genre: "Sci-Fi",
//         poster: "https://via.placeholder.com/300x450"
//     }
// };
let movies = {

    avengers: {
        recommendation: [
            {
                name: "Spiderman",
                rating: 8.2,
                genre: "Action",
                poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPllfjQz3bx93M9fnh-R985K7f1BD7Eumyh7nD3PHJaWix4tlIbaYAfo&s=10"
            },
            {
                name: "Iron Man",
                rating: 7.9,
                genre: "Action",
                poster: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
            },
            {
                name: "Thor",
                rating: 7.0,
                genre: "Action",
                poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLVABfgcQGCfvy3H_B_5jBHdwFurALUcePX_wDnIKqQ&s"
            }
        ]
    },

    batman: {
        recommendation: [
            {
                name: "Joker",
                rating: 8.3,
                genre: "Crime",
                poster: "https://media.newyorker.com/photos/5d96486e27c9b4000888d24b/master/w_1920,c_limit/Brody-Joker.jpg"
            },
            {
                name: "The Dark Knight",
                rating: 9.0,
                genre: "Action",
                poster: "https://i.redd.it/z19ndjd7m2ac1.jpeg"
            }
        ]
    },

    interstellar: {
        recommendation: [
            {
                name: "Inception",
                rating: 8.8,
                genre: "Sci-Fi",
                poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RO98r0C3gxSnCPelcM-G_MDYr_O4SQzinRHNFC_vX3CIbpzRHO6-c962&s=10"
            },
            {
                name: "The Martian",
                rating: 8.0,
                genre: "Sci-Fi",
                poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcjd2ONSvVIBYxz6i1UAN1opAbaQV2k9NMY_scNJ_6w&s"
            }
        ]
    }
};

function recommendMovie() {

    let movie = document.getElementById("movieInput").value.toLowerCase().trim();
    let minRating = Number(
    document.getElementById("ratingInput").value
);
    if (movies[movie]) {

        let recommendation = movies[movie].recommendation;
        let rating = movies[movie].rating;
        let genre = movies[movie].genre;
        let poster = movies[movie].poster;

        // document.getElementById("result").innerText =
        //   "You might like " + recommendation.join(", ") +
        //    "\n Rating: " + rating + 
        //    "\n Genre: " + genre;
        // document.getElementById("result").innerHTML =`
        // <div class= "movie-card">
        // <h2>You might like: </h2>
        // <p> ${recommendation.join(", ")} </p>
        // <p> Rating: ${rating} </p>
        // <p> Genre: ${genre} </p>
        let result = document.getElementById("result");// store dom ekement in a variable to avoid multiple DOM queries 

result.innerHTML = `
    <h2>You might like:</h2>
`;
//the below was not for loop but for each movie in the recommendation array we are creating a card with poster, name, rating and genre and adding it to the result div

// for (let movieName of recommendation) {// usimg for of loop to iterate over the recommendation array and display each movie 

//     // result.innerHTML += ` //adding instead of repalcing with existing content using += operator
//     result.innerHTML += `
//             <div class="movie-card">
//             <img src="${poster}" alt="${movieName} poster" />
//             <h3> ${movieName}</h3>
//             <p> Rating: ${rating}</p>
//             <p> Genre: ${genre}</p>
//         </div>
//     `;
// }
for (let movie of recommendation) {

    result.innerHTML += `
        <div class="movie-card">

            <img src="${movie.poster}" alt="${movie.name}">

            <h3> ${movie.name}</h3>

            <p> Rating: ${movie.rating}</p>

            <p> Genre: ${movie.genre}</p>

        </div>
    `;
}

        }

    else {
        document.getElementById("result").innerText =
            "Sorry, we don't have a recommendation for that movie.";
    }
}
// let goodMovies = recommendations.filter(function(movie) {
//     return movie.rating >= 8;
// });






