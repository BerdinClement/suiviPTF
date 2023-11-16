import StudentCard from "@/components/StudentCard";

const StudentsPage = () => {
    return (
        <div className="w-full h-full bg-student_back">
            <h1 className="p-8 underline text-2xl">Liste des étudiants</h1>
            <div>
                <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
            </div>
        </div>
    );
}

export default StudentsPage;