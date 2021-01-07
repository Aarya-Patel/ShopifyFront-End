import React from "react";
import Movie from "../Movie/Movie.js";
import "./SearchResultsStyles.css";

const SearchResults = ({ data, addNominee, inputMovie, nominees }) => {
  // Displays the movies in the data

  const displayMovies = (data) => {
    // Map each of the movie within the data to its own Movie component
    return data.map((movieObj, indx) => {
      let { Title, Year, imdbID } = movieObj;
      let condensedMovieObj = { title: Title, year: Year, imdbID: imdbID };
      let isNominated = false;

      nominees.forEach((nominee) => {
        if (JSON.stringify(nominee) === JSON.stringify(condensedMovieObj)) {
          isNominated = true;
        }
      });

      return (
        <Movie
          key={indx}
          title={Title}
          year={Year}
          imdbID={imdbID}
          addNominee={addNominee}
          isNominated={isNominated}
        />
      );
    });
  };

  return (
    <div className="results-container">
      <h2 className="title">Results for "{inputMovie}"</h2>
      {displayMovies(data)}
    </div>
  );
};

export default SearchResults;
