import StudentCard from "@/components/StudentCard";
import Input from "@/components/Input";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import RefreshButton from "@/components/RefreshButton";

const StudentsPage = () => {
    const optionList: string[] = ["Test 1", "Test 2", "Test 3"];

    return (
        <div className="w-full h-full bg-background">
            <div className="px-8">
                <div className="flex flex-row justify-between py-4">
                    <h1 className="underline text-2xl">Liste des étudiants</h1>
                    <Button type="button" className="bg-purple">
                        Ajouter un étudiant
                    </Button>
                </div>
                <div className="flex flex-row justify-between pb-8">
                    <div className="flex">
                        <Input type="text" placeholder="Mail : ..." className="mr-8"></Input>
                        <Input type="text" placeholder="Prénom : ..." className="mr-8"></Input>
                        <Dropdown className="" options={optionList}></Dropdown>
                    </div>
                    <div className="flex">
                        <RefreshButton></RefreshButton>
                    </div>
                </div>
                <div>
                    <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
                </div>
            </div>
        </div>
    );
}

export default StudentsPage;