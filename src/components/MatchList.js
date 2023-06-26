import React, { useEffect, useState } from "react";

const MatchList = (props) => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/applicants/matched/" + props.culture_type
      );
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
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant) => (
            <tr key={applicant.id}>
              <td>{applicant.id}</td>
              <td>{applicant.first_name}</td>
              <td>{applicant.last_name}</td>
              <td>{applicant.culture_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchList;
