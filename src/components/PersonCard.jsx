import styles from "./PersonCard.module.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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

  const handleSave = () => {
    // Convert skills string back to array before saving
    const updatedData = {
      ...formData,
      skills: formData.skills.split(",").map((s) => s.trim()),
    };

    axios
      .put(`http://localhost:3001/employees/${id}`, updatedData)
      .then((response) => {
        // Update employee state with saved data
        setEmployee({
          ...response.data,
          skills: Array.isArray(response.data.skills)
            ? response.data.skills
            : typeof response.data.skills === "string"
            ? response.data.skills.split(",").map((s) => s.trim())
            : [],
        });
        setIsEditing(false);

        // Show confirmation message
        setSavedMessage("Changes saved! ✅");
        setTimeout(() => setSavedMessage(""), 2000); // disappear after 2s
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };

  // Calculate total years
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
        <button onClick={toggleEdit}>Edit</button>
      </div>

      {savedMessage && <p className={styles.saved}>{savedMessage}</p>}
      {reminderMessage && <p className={styles.reminder}>{reminderMessage}</p>}
    </div>
  );
};

export default PersonCard;
