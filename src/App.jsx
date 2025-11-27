import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
import AddEmployee from "./components/AddEmployee";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  // Fetch employees from backend
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
        <Route
          path="/"
          element={
            <PersonList
              data={employees}
              employees={employees}
              setEmployees={setEmployees}
            />
          }
        />
        <Route
          path="/add-employee"
          element={
            <AddEmployee employees={employees} setEmployees={setEmployees} />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
