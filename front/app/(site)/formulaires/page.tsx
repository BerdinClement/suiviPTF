import FormCard from "@/components/FormCard";
import StudentInput from "@/components/StudentInput";

const FormsPage = () => {
    return (
        <div className="w-full h-full bg-Form_back">
            <div className="flex flex-row">
                <StudentInput type="text" placeholder="Titre : ..." className=""></StudentInput>
                <StudentInput type="text" placeholder="Date : ..." className=""></StudentInput>
            </div>
            <div>
                <h1 className="p-8 underline text-2xl">Liste des Formulaires</h1>
                <div>
                    <FormCard title="BERDIN Clément" date="20/11/2023" id="1"></FormCard>
                </div>
            </div>
        </div>
    );
}

export default FormsPage;