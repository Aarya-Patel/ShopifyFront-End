import React from "react";
import "./SearchbarStyles.css";

const Searchbar = ({ getApiData, setInputMovie }) => {
  // This handle gets the value from the search bar and calls the api to get data
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const movieTitle = document.querySelector(".search-bar").value;
    getApiData(movieTitle);
    setInputMovie(movieTitle);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={onSubmitHandle}>
        <h2 className="title">Movie Search</h2>
        <input className="search-bar" placeholder="Enter a Movie Title"></input>
      </form>
    </div>
  );
};

export default Searchbar;
