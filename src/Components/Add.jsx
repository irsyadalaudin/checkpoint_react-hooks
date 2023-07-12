/* eslint-disable react/prop-types */                        /* eslint-disable react/prop-types */
import { useState } from 'react';                     

const Add = ({movies, setMovies}) => {
    const [title, setTitle] = useState('');                  // State variables to hold the input values
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState(0);

    const addMovie = () => {                                 // Function to add a new movie to the list
        const newMovie = {
            title: title,
            description: description,
            posterURL: posterURL,
            rating: rating
            };
            setMovies([...movies, newMovie]);

        setTitle('');                                        // Resetting the input fields
        setDescription('');
        setPosterURL('');
        setRating(0);
    };

    const handleEnterPress = (e) => {                       // Function to handle Enter key press event
        if (e.key === "Enter") {
            addMovie();
        }
    };

    return (
        <div className="input-group d-flex justify-content-center pt-4 px-5">
            <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" onKeyPress={handleEnterPress} />
            <input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" onKeyPress={handleEnterPress} />
            <input className="form-control" type="text" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} placeholder="Poster URL" onKeyPress={handleEnterPress} />
            <input className="form-control" type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" onKeyPress={handleEnterPress} />
            <button onClick={addMovie}>Add Movie</button>
        </div>
    );
}

export default Add;