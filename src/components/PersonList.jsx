import PersonCard from "./PersonCard";

const PersonList = ({ data, employees, setEmployees }) => {
  return (
    <div className="container">
      {data.map((employee) => (
        <PersonCard
          key={employee.id}
          {...employee}
          employees={employees}
          setEmployees={setEmployees}
        />
      ))}
    </div>
  );
};

export default PersonList;
