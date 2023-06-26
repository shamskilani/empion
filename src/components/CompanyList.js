import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CompanyList = ({ reloadList }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/companies")
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.log(error));
  }, [reloadList]);

  return (
    <div>
      <h2>Company List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Culture Type</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Matches</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.culture_type}</td>
              <td>{company.created_at}</td>
              <td>{company.updated_at}</td>
              <td>
                <div>
                  <Link to={`/matches/${company.culture_type}`}>
                    View Matches
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
