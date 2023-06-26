import React, { useEffect, useState } from "react";

const ApplicantList = ({ reloadList }) => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetchApplicants();
  }, [reloadList]); // Add reloadList as a dependency

  const fetchApplicants = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/applicants");
      const data = await response.json();
      setApplicants(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Applicant List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Culture Type</th>
            <th>Created at</th>
            <th>Updated at</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant) => (
            <tr key={applicant.id}>
              <td>{applicant.id}</td>
              <td>{applicant.first_name}</td>
              <td>{applicant.last_name}</td>
              <td>{applicant.culture_type}</td>
              <td>{applicant.created_at}</td>
              <td>{applicant.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantList;
