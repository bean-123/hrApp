import PersonCard from "./PersonCard";

const PersonList = ({ data }) => {
  return (
    <div className="container">
      {data.map((employee) => (
        <PersonCard
          key={employee.id}
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
  );
};
export default PersonList;
