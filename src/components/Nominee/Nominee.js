import React from "react";
import "./NomineeStyles.css";

const Nominee = ({ title, year, imdbID, deleteNominee }) => {
  const movieInfo = { title, year, imdbID };

  return (
    <div className="nominee-list">
      <p>
        {title} ({year})
      </p>
      <button
        className="btn-delete"
        onClick={deleteNominee.bind(null, movieInfo)}
      >
        Delete
      </button>
    </div>
  );
};

export default Nominee;
