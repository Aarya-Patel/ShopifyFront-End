import React, { useState } from "react";
import fetchApiData from "./Api.js";
import Searchbar from "./components/Searchbar/Searchbar.js";
import SearchResults from "./components/SearchResults/SearchResults.js";
import Banner from "./components/Banner/Banner.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";
import Nominee from "./components/Nominee/Nominee.js";

function App() {
  const [nominees, setNominees] = useState(
    JSON.parse(localStorage.getItem("nominees")) || []
  );
  const [data, setData] = useState([]);
  const [inputMovie, setInputMovie] = useState("");

  // Updates the api data
  const getApiData = async (movieTitle) => {
    let newData = await fetchApiData(movieTitle);
    newData = newData || [];
    setData(newData);
  };

  // Take in the new nominee obj and add the update state
  const addNominee = (nominee) => {
    if (nominees.length < 5) {
      let newNominees = [...nominees];
      newNominees.push(nominee);
      setNominees(newNominees);

      // Add the newly added nominees to the local storage
      localStorage.setItem("nominees", JSON.stringify(newNominees));
    }
  };

  const deleteNominee = (nominee) => {
    // ID to remove from the nominee list
    const { imdbID } = nominee;
    const newNominees = nominees.filter(
      (nomineeObj) => nomineeObj.imdbID !== imdbID
    );
    setNominees(newNominees);

    // Update the nominess in the browser's local storage
    localStorage.setItem("nominees", JSON.stringify(newNominees));
  };
  return (
    <div className="App">
      <h1 className="title">The Shoppies</h1>
      <Searchbar getApiData={getApiData} setInputMovie={setInputMovie} />
      {nominees.length === 5 ? <Banner /> : <></>}
      <div className="content-container">
        <div className="main-container">
          <SearchResults
            data={data}
            addNominee={addNominee}
            inputMovie={inputMovie}
            nominees={nominees}
          />
          {/* <Search addNominee={addNominee} nominees={nominees} /> */}
        </div>

        <div className="nominee-container">
          <h2 className="title">Nominations</h2>
          {nominees.map((movie, indx) => (
            <Nominee key={indx} {...movie} deleteNominee={deleteNominee} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
