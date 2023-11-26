import StudentCard from "@/components/StudentCard";
import StudentsList from "./studentsList";

const StudentsPage = () => {



    return (
        <div className="w-full h-full bg-student_back">
            <h1 className="p-8 underline text-2xl">Liste des étudiants</h1>
            <div>
                <StudentsList />
            </div>
        </div>
    );
}

export default StudentsPage;