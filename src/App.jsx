import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import ContactsList from "./components/Dashboard/ContactsList"
import ContactDetails from "./components/Dashboard/ContactDetails"
import AddContact from "./components/Dashboard/AddContact"

function App() {
  return (
    <Router>
        <div>
        <nav>
            <h1>Menu</h1>
          <ul>
            <li>
              <Link to="/contacts">Contact List</Link>
            </li>
            <li>
              <Link to="/add-contact">Add New Contact</Link>
            </li>
          </ul>
        </nav>
        </div>
      <Routes>
        <Route path="/contacts" element={<ContactsList />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
        <Route path="/add-contact" element={<AddContact />} />
      </Routes>
    </Router>
  )
}

export default App
