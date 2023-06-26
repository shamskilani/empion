import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./CompanyForm";
import CompanyList from "./CompanyList";

function Company() {
  const [reloadList, setReloadList] = useState(false);

  const handleReloadList = () => {
    setReloadList((prevReloadList) => !prevReloadList);
  };

  return (
    <div>
      <div>
        <button className="Navigation">
          <Link to="/">Back to Home</Link>
        </button>
        <button className="Navigation">
          <Link to="/Admin">Back to Admin</Link>
        </button>
      </div>
      <div>
        <CompanyForm onFormSubmit={handleReloadList} />
      </div>
      <div>
        <CompanyList reloadList={reloadList} />
      </div>
    </div>
  );
}

export default Company;
