import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ContactsList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/agrmet/contact")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>
              {contact.firstName} {contact.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
