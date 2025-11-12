import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data";
import PersonList from "./components/PersonList";
import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [employees, setEmployees] = useState(data);

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prev) => [...prev, newEmployee]);
  };

  return (
    <BrowserRouter>
      <Header headertext="hrApp" />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<PersonList data={employees} />} />
        {/* Add employee page */}
        <Route
          path="/add-employee"
          element={<AddEmployee handleClick={handleAddEmployee} />}
        />
        {/* About page */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
