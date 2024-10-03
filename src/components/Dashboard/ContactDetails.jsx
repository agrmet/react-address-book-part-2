import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ContactDetails() {
  const { id } = useParams()
  const [contact, setContact] = useState(null)

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/agrmet/contact/${id}`)
      .then((response) => response.json())
      .then((data) => setContact(data))
      .catch((error) => console.error("Error fetching contact:", error));
  }, []);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Contact Details</h1>
      <p>
        <strong>First Name:</strong> {contact.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {contact.lastName}
      </p>
      <p>
        <strong>Street:</strong> {contact.street}
      </p>
      <p>
        <strong>City:</strong> {contact.city}
      </p>
    </div>
  );
}

export default ContactDetails;
