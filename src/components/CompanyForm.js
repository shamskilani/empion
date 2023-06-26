import React, { useState, useEffect } from "react";

const CompanyForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [cultureType, setCultureType] = useState("");
  const [cultureTypes, setCultureTypes] = useState([]);

  useEffect(() => {
    // Fetch culture types from the API
    fetch("http://localhost:3000/api/v1/culture_types")
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

    const data = {
      name,
      culture_type: cultureType,
    };

    try {
      const response = await fetch("http://localhost:3000/api/v1/companies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Trigger the reload of the company list
        onFormSubmit();
        // Reset the form fields
        setName("");
        setCultureType("");
      } else {
        console.log("Error: Unable to create company");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create Company</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="cultureType">Culture Type:</label>
          <select
            id="cultureType"
            value={cultureType}
            onChange={(e) => setCultureType(e.target.value)}
            required
          >
            <option value="">Select Culture Type</option>
            {cultureTypes.map((cultureType) => (
              <option key={cultureType.id} value={cultureType.name}>
                {cultureType.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" name="create">Create</button>
      </form>
    </div>
  );
};

export default CompanyForm;
