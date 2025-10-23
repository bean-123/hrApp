const Person = (props) => {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.title}</p>
      <p>{props.salary}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <p>{props.animal}</p>
    </>
  );
};

export default Person;
