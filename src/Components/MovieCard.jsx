/* eslint-disable react/prop-types */
const MovieCard = ( {title, description, posterURL, rating} ) => {         // Define MovieCard component and destructure the props
    return (
        <div className="border text-center" style={{width: "227px"}}>      {/* Render a div element with classes and style.css properties */}
            <img src={posterURL} alt="image"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{rating}</p>
        </div>
    );
};

export default MovieCard;                                                   // Export the MovieCard component