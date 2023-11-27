"use client";

import StudentCard from "@/components/StudentCard";
import { getAllStudents } from "@/services/users";
import { useEffect, useState } from "react";

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await getAllStudents();
      setStudents(res);
    };
    fetchStudents();
  }, []);

  if (!students) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={`${student.user.firstName} ${student.user.lastName}`}
          email={student.user.email}
          year={"2002"}
          className="w-full md:w-80"
        />
      ))}
    </>
  );
};

export default StudentsList;
