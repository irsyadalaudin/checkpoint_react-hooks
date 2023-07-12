/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";                                     // Import the MovieCard component

const MovieList = ({movies}) => {                                        // Define MovieList component and destructure the props
    return (
        <div className="d-flex flex-wrap justify-content-center">        {/* Render a div element with classes and flexbox properties */}
            {movies.map((movie) => (                                     // Map over the movies array and return MovieCard component for each movie
                <MovieCard key={movie.title} {...movie} />                     // Render the MovieCard component with key and spread the movie object as props
            ))}
        </div>
    );
};

export default MovieList;                                                // Export the MovieList component