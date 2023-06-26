import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import MatchList from "./MatchList";


function Matches() {
  const { culture_type } = useParams();
  return (
    <div className="Applicant">
      <div>
        <button className="Navigation">
          <Link to="/">Back to Home</Link>
        </button>
        <button className="Navigation">
          <Link to="/Company">Back to Company</Link>
        </button>
      </div>

      <div>
        <MatchList culture_type={{ culture_type }.culture_type} />
      </div>
    </div>
  );
}

export default Matches;
