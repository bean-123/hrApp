import { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    location: "",
    department: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }; // ...formData to ...prevState (it takes previous data)
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={formData.lastName}
          onChange={handleChange}
        />
      </form>
      <p>Your name is: {formData.name}</p>
      <p>Your title is: {formData.title}</p>
    </div>
  );
}
export default Form;
