import React from "react";
import "./MovieStyles.css";

const Movie = ({ title, year, imdbID, addNominee, isNominated }) => {
  const movieInfo = { title, year, imdbID };

  return (
    <div className="movie-container">
      <p>
        {title} ({year})
      </p>

      <button onClick={addNominee.bind(null, movieInfo)} disabled={isNominated}>
        Nominate
      </button>
    </div>
  );
};

export default Movie;
