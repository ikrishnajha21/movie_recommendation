// // function recommendMovie() {

// //     let movie = document.getElementById("movieInput").value.toLowerCase().trim();

//     // if (movie === "avengers") {
//     //     let recommendations = ["Iron Man", "Thor", "Captain America", "Black Panther"];
//     //     document.getElemen     tById("result").innerText =
//     //         "You might like " + recommendations.join(",")+"!";
//     // }

//     // else if (movie === "batman") {
//     //     document.getElementById("result").innerText =
//     //         "You might like Scarface!";
//     // }

//     // else if (movie === "interstellar") {
//     //     document.getElementById("result").innerText =
//     //         "You might like Endgame!";
//     // }

//     // else if (movie === "godfather") {
//     //     document.getElementById("result").innerText =
//     //         "You might like Goodfellas!";
//     // }
//     //  else if (movie === "titanic") {
//     //     document.getElementById("result").innerText =
//     //         "You might like The Notebook!";
//     // }

//     // else if (movie === "joker") {
//     //     document.getElementById("result").innerText =
//     //         "You might like The Dark Knight!";
//     // }
//     // else {
//     //     document.getElementById("result").innerText =
//     //         "Sorry, we don't have a recommendation for that movie.";
//     // }

// // let movies = {

// //     avengers: {
// //         recommendation: ["Spiderman", "Iron Man", "Thor"],
// //         rating: 8.0,
// //         genre: "Action",
// //         poster: "https://via.placeholder.com/300x450"
// //     },

// //     batman: {
// //         recommendation: ["Joker", "The Dark Knight"],
// //         rating: 9.0,
// //         genre: "Action",
// //         poster: "https://via.placeholder.com/300x450"
// //     },

// //     interstellar: {
// //         recommendation: ["Inception", "The Martian"],
// //         rating: 8.7,
// //         genre: "Sci-Fi",
// //         poster: "https://via.placeholder.com/300x450"
// //     }
// // };
// let movies = {

//     avengers: {
//         recommendation: [
//             {
//                 name: "Spiderman",
//                 rating: 8.2,
//                 genre: "Action",
//                 poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPllfjQz3bx93M9fnh-R985K7f1BD7Eumyh7nD3PHJaWix4tlIbaYAfo&s=10"
//             },
//             {
//                 name: "Iron Man",
//                 rating: 7.9,
//                 genre: "Action",
//                 poster: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
//             },
//             {
//                 name: "Thor",
//                 rating: 7.0,
//                 genre: "Action",
//                 poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLVABfgcQGCfvy3H_B_5jBHdwFurALUcePX_wDnIKqQ&s"
//             }
//         ]
//     },

//     batman: {
//         recommendation: [
//             {
//                 name: "Joker",
//                 rating: 8.3,
//                 genre: "Crime",
//                 poster: "https://media.newyorker.com/photos/5d96486e27c9b4000888d24b/master/w_1920,c_limit/Brody-Joker.jpg"
//             },
//             {
//                 name: "The Dark Knight",
//                 rating: 9.0,
//                 genre: "Action",
//                 poster: "https://i.redd.it/z19ndjd7m2ac1.jpeg"
//             }
//         ]
//     },

//     interstellar: {
//         recommendation: [
//             {
//                 name: "Inception",
//                 rating: 8.8,
//                 genre: "Sci-Fi",
//                 poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RO98r0C3gxSnCPelcM-G_MDYr_O4SQzinRHNFC_vX3CIbpzRHO6-c962&s=10"
//             },
//             {
//                 name: "The Martian",
//                 rating: 8.0,
//                 genre: "Sci-Fi",
//                 poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcjd2ONSvVIBYxz6i1UAN1opAbaQV2k9NMY_scNJ_6w&s"
//             }
//         ]
//     }
// };

// function recommendMovie() {

//     let movie = document.getElementById("movieInput").value.toLowerCase().trim();
//     let minRating = Number(
//     document.getElementById("ratingInput").value
// );
//     if (movies[movie]) {

//         let recommendation = movies[movie].recommendation;
//         let filteredMovies = recommendation.filter(function(movie) {
//     return movie.rating >= minRating;
// });
// if (filteredMovies.length === 0) {
//     result.innerText = "No movies found with this rating.";
//     return;
// }
//         let rating = movies[movie].rating;
//         let genre = movies[movie].genre;
//         let poster = movies[movie].poster;

//         // document.getElementById("result").innerText =
//         //   "You might like " + recommendation.join(", ") +
//         //    "\n Rating: " + rating + 
//         //    "\n Genre: " + genre;
//         // document.getElementById("result").innerHTML =`
//         // <div class= "movie-card">
//         // <h2>You might like: </h2>
//         // <p> ${recommendation.join(", ")} </p>
//         // <p> Rating: ${rating} </p>
//         // <p> Genre: ${genre} </p>
//         let result = document.getElementById("result");// store dom ekement in a variable to avoid multiple DOM queries 

// result.innerHTML = `
//     <h2>You might like:</h2>
// `;
// //the below was not for loop but for each movie in the recommendation array we are creating a card with poster, name, rating and genre and adding it to the result div

// // for (let movieName of recommendation) {// usimg for of loop to iterate over the recommendation array and display each movie 

// //     // result.innerHTML += ` //adding instead of repalcing with existing content using += operator
// //     result.innerHTML += `
// //             <div class="movie-card">
// //             <img src="${poster}" alt="${movieName} poster" />
// //             <h3> ${movieName}</h3>
// //             <p> Rating: ${rating}</p>
// //             <p> Genre: ${genre}</p>
// //         </div>
// //     `;
// // }
// //for (let movie of recommendation) {
// for (let movie of filteredMovies) {
//     result.innerHTML += `
//         <div class="movie-card">

//             <img src="${movie.poster}" alt="${movie.name}">

//             <h3> ${movie.name}</h3>

//             <p> Rating: ${movie.rating}</p>

//             <p> Genre: ${movie.genre}</p>

//         </div>
//     `;
// }

//         }

//     else {
//         document.getElementById("result").innerText =
//             "Sorry, we don't have a recommendation for that movie.";
//     }
// }
// // let goodMovies = recommendations.filter(function(movie) {
// //     return movie.rating >= 8;
// // });
// let movies = {

//     avengers: {
//         recommendation: [
//             {
//                 name: "Spiderman",
//                 rating: 8.2,
//                 genre: "Action",
//                 poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPllfjQz3bx93M9fnh-R985K7f1BD7Eumyh7nD3PHJaWix4tlIbaYAfo&s=10"
//             },
//             {
//                 name: "Iron Man",
//                 rating: 7.9,
//                 genre: "Action",
//                 poster: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
//             },
//             {
//                 name: "Thor",
//                 rating: 7.0,
//                 genre: "Action",
//                 poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLVABfgcQGCfvy3H_B_5jBHdwFurALUcePX_wDnIKqQ&s"
//             }
//         ]
//     },

//     batman: {
//         recommendation: [
//             {
//                 name: "Joker",
//                 rating: 8.3,
//                 genre: "Crime",
//                 poster: "https://media.newyorker.com/photos/5d96486e27c9b4000888d24b/master/w_1920,c_limit/Brody-Joker.jpg"
//             },
//             {
//                 name: "The Dark Knight",
//                 rating: 9.0,
//                 genre: "Action",
//                 poster: "https://i.redd.it/z19ndjd7m2ac1.jpeg"
//             }
//         ]
//     },

//     interstellar: {
//         recommendation: [
//             {
//                 name: "Inception",
//                 rating: 8.8,
//                 genre: "Sci-Fi",
//                 poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RO98r0C3gxSnCPelcM-G_MDY_R_O4SQzinRHNFC_vX3CIbpzRHO6-c962&s=10"
//             },
//             {
//                 name: "The Martian",
//                 rating: 8.0,
//                 genre: "Sci-Fi",
//                 poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcjd2ONSvVIBYxz6i1UAN1opAbaQV2k9NMY_scNJ_6w&s"
//             }
//         ]
//     }
// };


// function recommendMovie() {

//     // Get the movie entered by the user
//     let movie = document
//         .getElementById("movieInput")
//         .value
//         .toLowerCase()
//         .trim();
// if (movie === "") {
//         document.getElementById("result").innerText =
//             "Please enter a movie name.";

//         return;
//     }
//     // Get the minimum rating entered by the user
//     let minRating = Number(
//         document.getElementById("ratingInput").value
//     );


//     // Check if the movie exists
//     if (movies[movie]) {

//         // Get the recommendation array
//         let recommendation = movies[movie].recommendation;


//         // Filter movies according to minimum rating
//         let filteredMovies = recommendation.filter(function(movie) {
//             return movie.rating >= minRating;
//         });


//         // Get the result div
//         let result = document.getElementById("result");


//         // If no movies match the rating
//         if (filteredMovies.length === 0) {

//             result.innerText = "No movies found with this rating.";

//             return;
//         }


//         // Display heading
//         result.innerHTML = `
//             <h2>You might like:</h2>
//         `;


//         // Go through every filtered movie
//         for (let movie of filteredMovies) {

//             // Add a movie card
//             result.innerHTML += `
//                 <div class="movie-card">

//                     <img src="${movie.poster}" alt="${movie.name}">

//                     <h3>${movie.name}</h3>

//                     <p>Rating: ${movie.rating}</p>

//                     <p>Genre: ${movie.genre}</p>

//                 </div>
//             `;
//         }

//     }

//     else {

//         // Movie does not exist
//         document.getElementById("result").innerText =
//             "Sorry, we don't have a recommendation for that movie.";
//     }
// }


 
const API_KEY = "4ce76bf6";

const API_URL = "https://www.omdbapi.com/";

const movieInput = document.getElementById("movieInput");

const ratingInput = document.getElementById("ratingInput");

const searchButton = document.getElementById("searchButton");

const result = document.getElementById("result");

const loading = document.getElementById("loading");

const error = document.getElementById("error");

const suggestions = document.getElementById("suggestions");

const favoritesContainer = document.getElementById("favorites");


let savedFavorites =
    localStorage.getItem("favorites");

let favorites = savedFavorites
    ? JSON.parse(savedFavorites)
    : []; //ternatory operator Is savedFavorites available?
          //  YES → JSON.parse(savedFavorites)
          //    ↓
          //   NO → []


let currentMovies = []

renderFavorites();



async function searchMovies(movieName) {

    movieName = movieName.toLowerCase().trim();



    if (movieName === "") {showError("Please enter a movie name.");

        return;
    }

    clearResults();


    loading.classList.remove("hidden");


    try {

    

        let params = new URLSearchParams({ // this creates url query parameters

            apikey: API_KEY,

            s: movieName,

            type: "movie"

        });


    

        let url = `${API_URL}?${params}`; // building the url 

        console.log("API URL:", url);


    

        let response = await fetch(url);


    
        if (!response.ok) {

            throw new Error(
                "Network request failed."
            );
        }


        let data = await response.json();

        console.log("API DATA:", data);

        if (data.Response === "False") {

            throw new Error(
                data.Error || "Movie not found."
            );
        }


    
        let searchResults = data.Search;


        let detailedMovies =
            await getMovieDetails(searchResults);




        let minRating =
            Number(ratingInput.value) || 0; // iski value


    
        let filteredMovies =
            detailedMovies.filter(function(movie) {

                return movie.rating >= minRating;

            });



        if (filteredMovies.length === 0) {

            result.innerHTML = `
                <p>
                    No movies found with rating
                    ${minRating} or higher.
                </p>
            `;

            return;
        }


        renderMovies(filteredMovies);


    } catch (error) {

    
        showError(error.message);


    } finally {



        loading.classList.add("hidden");
    }
}




async function getMovieDetails(searchResults) {

    

    let moviePromises = searchResults
        .slice(0, 8)
        .map(function(movie) {

            return getSingleMovie(movie.imdbID);

        });


    
    let movies =
        await Promise.all(moviePromises);


    

    return movies.filter(function(movie) {

        return movie !== null;

    });
}



async function getSingleMovie(imdbID) {

    try {


        let params = new URLSearchParams({

            apikey: API_KEY,

            i: imdbID,

            plot: "short"

        });


    

        let url = `${API_URL}?${params}`;


    

        let response = await fetch(url);


        if (!response.ok) {

            throw new Error(
                "Failed to get movie details."
            );
        }


    

        let data = await response.json();


        

        if (data.Response === "False") {

            return null;
        }


        return {

            id: data.imdbID,
            name: data.Title,
            rating:
                data.imdbRating === "N/A"
                    ? 0
                    : Number(data.imdbRating),

            genre: data.Genre,
            poster:
                data.Poster === "N/A"
                    ? "https://via.placeholder.com/250x300?text=No+Poster"
                    : data.Poster,

            year: data.Year,
            plot: data.Plot
        };


    } catch (error) {

        console.log(
            "Could not load movie:",
            error.message
        );

        return null;
    }
}



function renderMovies(movies) {

    

    currentMovies = movies;


    

    result.innerHTML = "";


    

    result.innerHTML += `
        <h2 class="section-title">
            You might like:
        </h2>
    `;


    

    for (let movie of movies) {

        result.innerHTML += `

            <div class="movie-card">

                <img
                    src="${movie.poster}"
                    alt="${movie.name}"
                >

                <h3>
                    ${movie.name}
                </h3>

                <p>
                    Rating: ${movie.rating}
                </p>

                <p>
                    Genre: ${movie.genre}
                </p>

                <p>
                    Year: ${movie.year}
                </p>

                <button
                    class="favorite-button"
                    onclick="addFavorite('${movie.id}')"
                >
                    Add to Favorites
                </button>

            </div>

        `;
    }
}




function addFavorite(movieID) {

    let movie = currentMovies.find(function(movie) {

        return movie.id === movieID;

    });



    if (!movie) {

        return;
    }



    let alreadyExists =
        favorites.some(function(favorite) {

            return favorite.id === movie.id;

        });


    
    if (alreadyExists) {

        alert("Movie is already in favorites.");

        return;
    }




    favorites.push(movie);




    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );


    // Update favorites section

    renderFavorites();
}


function renderFavorites() {

    favoritesContainer.innerHTML = "";


    

    if (favorites.length === 0) {

        favoritesContainer.innerHTML = `
            <p>No favorites yet.</p>
        `;

        return;
    }




    for (let movie of favorites) {

        favoritesContainer.innerHTML += `

            <div class="favorite-item">

                <span>
                    ${movie.name}
                    (${movie.rating})
                </span>

                <button
                    class="remove-button"
                    onclick="removeFavorite('${movie.id}')"
                >
                    Remove
                </button>

            </div>

        `;
    }
}




function removeFavorite(movieID) {

    // Keep every movie except selected movie

    favorites = favorites.filter(function(movie) {

        return movie.id !== movieID;

    });


    

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );


    // Update screen

    renderFavorites();
}

function clearResults() {

    result.innerHTML = "";

    error.innerText = "";

    suggestions.innerHTML = "";
}



function showError(message) {

    result.innerHTML = "";

    error.innerText = message;
}




let searchTimer;


movieInput.addEventListener(
    "input",
    function() {

        

        clearTimeout(searchTimer);


        

        searchTimer = setTimeout(
            function() {

                let movieName =
                    movieInput.value.trim();


                

                if (movieName.length >= 3) {

                    searchMovies(movieName);

                }

            },
            500
        );

    }
);



searchButton.addEventListener(
    "click",
    function() {

        searchMovies(movieInput.value);

    }
);


movieInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            searchMovies(movieInput.value);

        }

    }
);