import React, { useState } from "react";
import { Link } from "react-router-dom";
import CultureTypeForm from "./CultureTypeForm";
import CultureTypeList from "./CultureTypeList";

function CultureType() {
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
        <CultureTypeForm onFormSubmit={handleReloadList} />
      </div>
      <div>
        <CultureTypeList reloadList={reloadList} />
      </div>
    </div>
  );
}

export default CultureType;
