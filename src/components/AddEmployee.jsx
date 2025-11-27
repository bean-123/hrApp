import { useState } from "react";
import axios from "axios";
import styles from "./AddEmployee.module.css";

const AddEmployee = ({ employees, setEmployees }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://hrapp-ukn2.onrender.com/employees", {
        id: String(employees.length + 1),
        ...formData,
        skills: formData.skills
          ? formData.skills.split(",").map((s) => s.trim())
          : [],
      })
      .then((response) => {
        setEmployees([...employees, response.data]); // update the state
        setFormData({
          name: "",
          title: "",
          salary: "",
          phone: "",
          email: "",
          animal: "",
          startDate: "",
          location: "",
          department: "",
          skills: "",
        });
      })
      .catch((error) => {
        console.error("Error adding new employee:", error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input name="name" value={formData.name} onChange={handleChange} />

          <label>Title:</label>
          <input name="title" value={formData.title} onChange={handleChange} />

          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />

          <label>Phone:</label>
          <input name="phone" value={formData.phone} onChange={handleChange} />

          <label>Email:</label>
          <input name="email" value={formData.email} onChange={handleChange} />

          <label>Animal:</label>
          <input
            name="animal"
            value={formData.animal}
            onChange={handleChange}
          />

          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />

          <label>Location:</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <label>Department:</label>
          <input
            name="department"
            value={formData.department}
            onChange={handleChange}
          />

          <label>Skills (comma-separated):</label>
          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
