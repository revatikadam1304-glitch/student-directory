import { useState } from "react";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  const students = [
    { name: "Revati Kadam", course: "AI & ML", city: "Karad" },
    { name: "Sanskruti Lokare", course: "AI & ML", city: "Satara" },
    { name: "Rohit Sharma", course: "Computer Engg", city: "Pune" },
    { name: "Alamnnashra Bagwan", course: "Mechanical", city: "Mumbai" },
    { name: "Virat Kolhi", course: "Mechanical", city: "Kolhapur" },
    { name: "Jasprit Bumrah", course: "Civil", city: "Nashik" },
    { name: "Tilak Varma", course: "Electrical", city: "Mumbai" },
    { name: "Suryakumar Yadav", course: "AI & DS", city: "Pune" },
    { name: "Vaibhav Suryavanshi", course: "Computer Engg", city: "Solapur" },
    { name: "Rishabh Pant", course: "IT", city: "Satara" },
    { name: "Ishaan Kishan", course: "Mechanical", city: "Karad" },
    {name: "Rajat Pathidar", course: "Civil", city: "Kolhapur" },
  ];

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Student Directory</h1>

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

<p className="count">
  Total Students: {filteredStudents.length}</p>
      <div className="student-list">
        {filteredStudents.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            course={student.course}
            city={student.city}
          />
        ))}
      </div>

    </div>
  );
}

export default App;