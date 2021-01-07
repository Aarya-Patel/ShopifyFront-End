const BASE_URL = "http://www.omdbapi.com/";
const API_KEY = "32300d09";

const fetchApiData = async (movieTitle) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${movieTitle}`;

  const data = await fetch(url)
    .then((data) => data.json())
    .catch((err) => {
      return err;
    });

  // Return the Searches resulted from the api
  return data.Search;
};

export default fetchApiData;
