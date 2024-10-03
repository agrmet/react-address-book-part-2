// AddContact.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { firstName, lastName, street, city };

    fetch("https://boolean-uk-api-server.fly.dev/agrmet/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Contact added:", data)
        navigate("/")
      })
      .catch((error) => {
        console.error("Error adding contact:", error)
      })
  }

  return (
    <div>
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Street:
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  )
}

export default AddContact
