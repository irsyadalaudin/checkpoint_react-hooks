import "./App.css"; 										        // Importing the CSS file for App component styling
import "bootstrap/dist/css/bootstrap.min.css";				        // Importing Bootstrap CSS for styling
import MovieList from "./Components/MovieList";				        // Importing the MovieList component
import { moviesData } from "./Constants/MoviesData";                // Importing moviesData from a separate file
import { useState } from "react";							        // Importing the useState hook from React
import Add from "./Components/Add";								    // Importing the Add component
import Filter from "./Components/Filter";						    // Importing the Filter component


const App = () => {
	const [movies, setMovies] = useState(moviesData)			    // Initializing movies state with moviesData and the setMovies function
	const originalMovies = [...moviesData]
	return (
		<div className="bg-secondary bg-gradient rounded-4 w-75 my-5 mx-auto text-white" style={{width: "1300px"}}>    {/* Render a div element with classes and style.css properties */}
			<Add movies={movies} setMovies={setMovies} />		    								{/* Rendering the Add component and passing movies and setMovies as props */}
			<Filter movies={movies} setMovies={setMovies}  originalMovies={originalMovies}/>        {/* Rendering the Filter component and passing movies and setMovies as props */}
			<MovieList movies={movies} setMovies={setMovies} />     								{/* Rendering the MovieList component and passing movies and setMovies as props */}
		</div>
	);
};

export default App;													 // Export the App component