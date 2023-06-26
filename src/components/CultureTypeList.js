import React, { useEffect, useState } from "react";
import { API_HOST } from "../config";

const CultureTypeList = ({ reloadList }) => {
  const [cultureTypes, setCultureTypes] = useState([]);

  useEffect(() => {
    // Fetch culture types from the API
    fetch(API_HOST + "/api/v1/culture_types")
      .then((response) => response.json())
      .then((data) => {
        setCultureTypes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [reloadList]); // Add reloadList as a dependency

  return (
    <div>
      <h2>Culture Types</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Created at</th>
            <th>Updated at</th>
          </tr>
        </thead>
        <tbody>
          {cultureTypes.map((cultureType) => (
            <tr key={cultureType.id}>
              <td>{cultureType.name}</td>
              <td>{cultureType.created_at}</td>
              <td>{cultureType.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CultureTypeList;
