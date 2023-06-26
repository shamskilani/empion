import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <button className="Navigation">
        <Link to="/">Home</Link>
      </button>
      <button className="Navigation">
        <Link to="/CultureType">Manage Culture Types</Link>
      </button>
      <button className="Navigation">
        <Link to="/Company">Manage Companies</Link>
      </button>
      <button className="Navigation">
        <Link to="/Applicant">Manage Applicants</Link>
      </button>
    </div>
  );
}

export default Admin;
