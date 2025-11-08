import { useState } from "react";
import styles from "./AddEmployee.module.css";

const AddEmployee = ({ handleClick }) => {
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

    // convert skills string to array
    const newEmployee = {
      ...formData,
      skills: formData.skills.split(",").map((s) => s.trim()),
    };

    handleClick(newEmployee);

    // reset form
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
  };

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <form>
          <label>Name:</label>
          <input name="name" value={formData.name} onChange={handleChange} />
          <label>Title:</label>
          <input name="title" value={formData.title} onChange={handleChange} />
          <label>Salary:</label>
          <input
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
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddEmployee;
