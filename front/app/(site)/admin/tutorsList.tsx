"use client";

import StudentCard from "@/components/StudentCard";
import { getAllTutors } from "@/services/users";
import { useEffect, useState } from "react";

const TutorsList = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      const res = await getAllTutors();
      setTutors(res);
    };
    fetchTutors();
  }, []);

  if (!tutors) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {tutors.map((tutor, index) => (
        <StudentCard
          name={`${tutor.user.firstName} ${tutor.user.lastName}`}
          email={tutor.user.email}
          key={index}
          year={"2002"}
          className="w-full md:w-80"
        />
      ))}
    </>
  );
};

export default TutorsList;
