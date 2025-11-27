import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
import AddEmployee from "./components/AddEmployee";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  // Fetch employees from JSON server
  useEffect(() => {
    axios
      .get("https://hrapp-ukn2.onrender.com/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  return (
    <BrowserRouter>
      <Header headertext="hrApp" />

      <Routes>
        {/* Home page*/}
        <Route path="/" element={<PersonList data={employees} />} />

        {/* Add employee page */}
        <Route
          path="/add-employee"
          element={
            <AddEmployee employees={employees} setEmployees={setEmployees} />
          }
        />

        {/* About page */}
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
