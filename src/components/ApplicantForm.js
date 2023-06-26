import React, { useState, useEffect } from "react";
import { API_HOST } from "../config";

const ApplicantForm = ({ onFormSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cultureType, setCultureType] = useState("");
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
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the form data
    const applicantData = {
      first_name: firstName,
      last_name: lastName,
      culture_type: cultureType,
    };

    try {
      const response = await fetch(API_HOST + "/api/v1/applicants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicantData),
      });

      if (response.ok) {
        // Trigger the reload of the applicant list
        onFormSubmit();
        // Reset the form fields
        setFirstName("");
        setLastName("");
        setCultureType("");
      } else {
        console.log("Error: Unable to create applicant");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create Applicant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cultureType">Culture Type:</label>
          <select
            id="cultureType"
            value={cultureType}
            onChange={(e) => setCultureType(e.target.value)}
          >
            <option value="">Select Culture Type</option>
            {cultureTypes.map((cultureType) => (
              <option key={cultureType.id} value={cultureType.name}>
                {cultureType.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplicantForm;
