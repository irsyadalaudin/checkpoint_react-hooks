/* eslint-disable react/prop-types */
const Filter = ({movies, setMovies}) => {
    const sortByTitle = () => {
        const sortedTitle = [...movies];
        sortedTitle.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        setMovies(sortedTitle)
    }

    const sortByRating = () => {
        const sortedRating = [...movies];
        sortedRating.sort((b, a) => Number(a.rating) - Number(b.rating))
        setMovies(sortedRating)
    }

    return (
        <div className="d-flex justify-content-center mt-2 mb-4">
            <button className="rounded-0 rounded-start-3" onClick={sortByTitle}>Filter By Title</button>
            <button className="rounded-0 rounded-end-3"onClick={sortByRating}>Filter By Rate</button>
        </div>
    );
};

export default Filter;