function StudentCard(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

export default StudentCard;