import React, { useState } from "react";

const CultureTypeForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name
    };

    try {
      const response = await fetch("http://localhost:3000/api/v1/culture_types", {
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
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CultureTypeForm;
