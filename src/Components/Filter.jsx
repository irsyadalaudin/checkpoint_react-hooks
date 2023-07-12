/* eslint-disable react/prop-types */            /* eslint-disable react/prop-types */
const Filter = ({movies, setMovies}) => {        // Initializing movies state with moviesData and the setMovies function

    const sortByTitle = () => {                  // sorts the movies array by title in ascending order
        const sortedTitle = [...movies];         // creates a new array 'sortedTitle' that is a copy of the 'movies' array
        sortedTitle.sort((a, b) => {             // sorts the 'sortedTitle' array using the sort method
            if (a.title < b.title) {             // The sort method takes in a compare function as an argument
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        setMovies(sortedTitle)                   // updates the state of the 'movies' array with the sorted array
    }

    const sortByRating = () => {                                             // sorts the movies array by rating in descending order
        const sortedRating = [...movies];                                    // creates a new array 'sortedRating' that is a copy of the 'movies' array
        sortedRating.sort((b, a) => Number(a.rating) - Number(b.rating))     // sorts the 'sortedRating' array using the sort method,   takes in a compare function as an argument,  The compare function subtracts the rating of movie 'b' from the rating of movie 'a'
        setMovies(sortedRating)                                              // updates the state of the 'movies' array with the sorted array
    }

    return (
        <div className="d-flex justify-content-center mt-2 mb-4">            {/* returns two buttons: one to sort by title and one to sort by ratin,   When clicked, each button calls its respective sorting function. */}
            <button className="rounded-0 rounded-start-3" onClick={sortByTitle}>Filter By Title</button>
            <button className="rounded-0 rounded-end-3"onClick={sortByRating}>Filter By Rating</button>
        </div>
    );
};

export default Filter;                           // Export the Filter component