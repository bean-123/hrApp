import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data";
import PersonList from "./components/PersonList";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState(data);

  return (
    <>
      <Header headertext="hrApp" />
      <PersonList data={employees} />
      <Footer />
    </>
  );
}

export default App;
