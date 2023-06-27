import React, { useState } from "react";
import { API_HOST } from "../config";

const CultureTypeForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name
    };

    try {
      const response = await fetch(API_HOST + "/api/v1/culture_types", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Trigger the reload of the culture type list
        onFormSubmit();
        // Reset the form fields
       
        setName("");
      } else {
        console.log("Error: Unable to create company");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create Culture Type</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value.trim())}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CultureTypeForm;
