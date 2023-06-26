import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <button className="Navigation">
        <Link to="/Admin">Enter as Admin</Link>
      </button>
    </div>
  );
}

export default Home;
