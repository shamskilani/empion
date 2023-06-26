import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApplicantForm from "./ApplicantForm";
import ApplicantList from "./ApplicantList";


function Applicant() {
  const [reloadList, setReloadList] = useState(false);

  const handleReloadList = () => {
    setReloadList((prevReloadList) => !prevReloadList);
  };

  return (
    <div className="Applicant">
      <div>
        <button className="Navigation">
          <Link to="/">Back to Home</Link>
        </button>
        <button className="Navigation">
          <Link to="/Admin">Back to Admin</Link>
        </button>
      </div>
      <div>
        <ApplicantForm onFormSubmit={handleReloadList} />
      </div>
      <div>
        <ApplicantList reloadList={reloadList} />
      </div>
    </div>
  );
}

export default Applicant;
