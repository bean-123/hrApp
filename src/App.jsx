import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonCard from "./components/PersonCard";
import data from "./data";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState(data);

  return (
    <>
      <Header headertext="hrApp" />
      <div className="container">
        {employees.map((employee) => (
          <PersonCard
            name={employee.name}
            title={employee.title}
            salary={employee.salary}
            phone={employee.phone}
            email={employee.email}
            animal={employee.animal}
            startDate={employee.startDate}
            location={employee.location}
            department={employee.department}
            skills={employee.skills.join(", ")}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
