import PersonCard from "./PersonCard";

const PersonList = ({ data }) => {
  return (
    <div className="container">
      {data.map((employee, index) => (
        <PersonCard key={index} {...employee} />
      ))}
    </div>
  );
};

export default PersonList;
