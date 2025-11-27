import React, { useState } from "react";
import axios from "axios";
import styles from "./PersonCard.module.css";

const PersonCard = ({
  id,
  name: initialName,
  title: initialTitle,
  salary: initialSalary,
  phone: initialPhone,
  email: initialEmail,
  animal: initialAnimal,
  startDate: initialStartDate,
  location: initialLocation,
  department: initialDepartment,
  skills: initialSkills,
  setEmployees,
  employees,
}) => {
  const [employee, setEmployee] = useState({
    name: initialName,
    title: initialTitle,
    salary: initialSalary,
    phone: initialPhone,
    email: initialEmail,
    animal: initialAnimal,
    startDate: initialStartDate,
    location: initialLocation,
    department: initialDepartment,
    skills: Array.isArray(initialSkills)
      ? initialSkills
      : typeof initialSkills === "string"
      ? initialSkills.split(",").map((s) => s.trim())
      : [],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    ...employee,
    skills: Array.isArray(employee.skills) ? employee.skills.join(", ") : "",
  });
  const [savedMessage, setSavedMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setFormData({
        ...employee,
        skills: employee.skills.join(", "),
      });
    }
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${employee.name}?`)) {
      axios
        .delete(`https://hrapp-ukn2.onrender.com/employees/${id}`)
        .then(() => {
          // Remove the employee from local state
          setEmployees(employees.filter((emp) => emp.id !== id));
        })
        .catch((err) => console.error("Error deleting employee:", err));
    }
  };

  const handleSave = () => {
    const updatedData = {
      ...formData,
      skills: formData.skills
        ? formData.skills.split(",").map((s) => s.trim())
        : [],
    };

    axios
      .put(`https://hrapp-ukn2.onrender.com/employees/${id}`, updatedData)
      .then((response) => {
        setEmployee({
          ...response.data,
          skills: Array.isArray(response.data.skills)
            ? response.data.skills
            : typeof response.data.skills === "string"
            ? response.data.skills.split(",").map((s) => s.trim())
            : [],
        });

        // Update parent state
        const updatedEmployees = employees.map((emp) =>
          emp.id === id ? response.data : emp
        );
        setEmployees(updatedEmployees);

        setIsEditing(false);
        setSavedMessage("Changes saved! ✅");
        setTimeout(() => setSavedMessage(""), 2000);
      })
      .catch((error) => console.error("Error saving employee:", error));
  };

  // Calculate years worked
  const start = new Date(employee.startDate);
  let totalYears = 0;
  if (!isNaN(start)) {
    const today = new Date();
    let years = today.getFullYear() - start.getFullYear();
    const hadAnniversary =
      today.getMonth() > start.getMonth() ||
      (today.getMonth() === start.getMonth() &&
        today.getDate() >= start.getDate());
    totalYears = hadAnniversary ? years : years - 1;
  }

  // Reminder messages
  let reminderMessage = "";
  if (totalYears < 0.5) reminderMessage = "🔔 Schedule probation review.";
  else if (totalYears % 5 === 0 && totalYears !== 0)
    reminderMessage = "🎉 Schedule recognition meeting.";

  const animalToEmoji = {
    Owl: "🦉",
    Fox: "🦊",
    Cat: "🐱",
    Dog: "🐶",
    Raven: "🪶",
    Otter: "🦦",
    Wolf: "🐺",
    Hedgehog: "🦔",
    Falcon: "🦅",
    Elephant: "🐘",
    Penguin: "🐧",
    Rabbit: "🐇",
    Lion: "🦁",
    Dolphin: "🐬",
    Koala: "🐨",
    Tiger: "🐯",
    Bear: "🐻",
    Monkey: "🐒",
    Panda: "🐼",
    Giraffe: "🦒",
    Horse: "🐴",
    Pig: "🐷",
    Chicken: "🐔",
    Sheep: "🐑",
    Frog: "🐸",
    Turtle: "🐢",
    Snake: "🐍",
    Whale: "🐋",
    Crocodile: "🐊",
    Bat: "🦇",
    Camel: "🐫",
    Octopus: "🐙",
  };

  const animalEmoji = animalToEmoji[employee.animal] || "";
  const skillsArray = Array.isArray(employee.skills)
    ? employee.skills
    : employee.skills.split(",").map((s) => s.trim());

  if (isEditing) {
    return (
      <div className={styles.Person}>
        <form className={styles.personinfo}>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Title:{" "}
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Salary:{" "}
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:{" "}
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:{" "}
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Animal:{" "}
            <input
              type="text"
              name="animal"
              value={formData.animal}
              onChange={handleChange}
            />
          </label>
          <label>
            Start Date:{" "}
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Location:{" "}
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <label>
            Department:{" "}
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </label>
          <label>
            Skills (comma-separated):{" "}
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </label>

          <div className={styles.buttons}>
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={toggleEdit}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.Person}>
      <div className={styles.maintext}>
        <h2 className={styles.name}>{employee.name}</h2>
        <p className={styles.years}>
          {totalYears} {totalYears === 1 ? "year" : "years"}
        </p>
      </div>

      <div className={styles.personinfo}>
        <p>Title: {employee.title}</p>
        <p>Salary: {employee.salary}</p>
        <p>Phone: {employee.phone}</p>
        <p>Email: {employee.email}</p>
        <p>
          Animal: {employee.animal} {animalEmoji}
        </p>
        <p>Start Date: {employee.startDate}</p>
        <p>Location: {employee.location}</p>
        <p>Department: {employee.department}</p>
        <p>Skills: {skillsArray.length ? skillsArray.join(", ") : "None"}</p>
      </div>

      {savedMessage && <p className={styles.saved}>{savedMessage}</p>}
      {reminderMessage && <p className={styles.reminder}>{reminderMessage}</p>}
      <div className={styles.buttons}>
        <button onClick={toggleEdit}>Edit</button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
