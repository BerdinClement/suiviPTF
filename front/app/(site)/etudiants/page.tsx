import StudentCard from "@/components/StudentCard";
import StudentInput from "@/components/StudentInput";

const StudentsPage = () => {
    return (
        <div className="w-full h-full bg-student_back">
            <div className="flex flex-row">
                <StudentInput type="text" placeholder="Mail : ..." className=""></StudentInput>
                <StudentInput type="text" placeholder="Prénom : ..." className=""></StudentInput>
            </div>
            <div>
                <h1 className="p-8 underline text-2xl">Liste des étudiants</h1>
                <div>
                    <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
                </div>
            </div>
        </div>
    );
}

export default StudentsPage;