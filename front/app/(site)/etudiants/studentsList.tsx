"use client";

import StudentCard from "@/components/StudentCard";
import { getAllStudents } from "@/services/users";
import { useEffect, useState } from "react";

interface StudentListProps {
  activeName: string;
  setActiveName: (name: string) => void;
}

interface Student {
  tutor?: {
    user: {
      firstName: string;
      lastName: string;
    };
  };
  user: {
    firstName: string;
    lastName: string;
    email: string;
    ine: string;
    num_etu: string;
  };
}

const StudentsList = ({ activeName, setActiveName }: StudentListProps) => {
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
      {students.map((student: Student, index) => {
        activeName = activeName.toLowerCase();
        const lastName = student.user.lastName.toLowerCase();
        const firstName = student.user.firstName.toLowerCase();

        const tutorName = `${student.tutor?.user.firstName ? student.tutor?.user.firstName : ''} ${student.tutor?.user.lastName ? student.tutor?.user.lastName : ''}`;
        if (
          activeName === "" ||
          lastName.includes(activeName) ||
          firstName.includes(activeName)
        ) {
          return (
            <StudentCard
              key={index}
              name={`${student.user.firstName} ${student.user.lastName}`}
              email={student.user.email}
              year={tutorName}
              className="w-full md:w-80"
            />
          );
        }
      })}
    </>
  );
};

export default StudentsList;
