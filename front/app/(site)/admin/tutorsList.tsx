"use client";

import StudentCard from "@/components/StudentCard";
import { getAllTutors } from "@/services/users";
import { useEffect, useState } from "react";

interface TutorListProps {
  activeName: string;
  setActiveName: (name: string) => void;
}

interface Tutor {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const TutorsList = ({ activeName, setActiveName }: TutorListProps) => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      const res = await getAllTutors();
      setTutors(res);
    };
    fetchTutors();
  }, []);

  if (!tutors) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      {tutors.map((tutor: Tutor, index) => {
        activeName = activeName.toLowerCase();
        const lastName = tutor.user.lastName.toLowerCase();
        const firstName = tutor.user.firstName.toLowerCase();
        if (activeName === "" || lastName.includes(activeName) || firstName.includes(activeName) ) {
          return (
            <StudentCard
              name={`${tutor.user.firstName} ${tutor.user.lastName}`}
              email={tutor.user.email}
              key={index}
              year={"2002"}
              className="w-full md:w-80"
            />
          )
        }
      })}
    </>
  );
};

export default TutorsList;
