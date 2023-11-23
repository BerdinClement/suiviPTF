import FormCard from "@/components/FormCard";
import Input from "@/components/Input";
import Button from "@/components/Button";
import RefreshButton from "@/components/RefreshButton";

const FormsPage = () => {
    return (
        <div className="w-full h-full bg-background">
            <div className="px-8">
                <div className="flex flex-row justify-between py-4">
                    <h1 className="underline text-2xl">Liste des formulaires</h1>
                    <Button type="button" className="bg-purple">
                        Ajouter un formulaire
                    </Button>
                </div>
                <div className="flex flex-row justify-between pb-8">
                    <div className="flex">
                        <Input type="text" placeholder="Titre : ..." className="mr-8"></Input>
                        <Input type="date" placeholder="Date : ..." className="mr-8"></Input>
                    </div>
                    <div className="flex">
                        <RefreshButton></RefreshButton>
                    </div>
                </div>
                {/* TODO : boucler sur tout les formulaires existants*/}
                <div className="flex flex-wrap">
                    <FormCard title="Formulaire" date="21/11/2023" id="1" className="w-80 m-4"></FormCard>
                    <FormCard title="Formulaire4" date="21/11/2023" id="1" className="w-80 m-4"></FormCard>
                    <FormCard title="Formulaire" date="21/11/2023" id="1" className="w-80 m-4"></FormCard>
                    <FormCard title="Formulaire4" date="21/11/2023" id="1" className="w-80 m-4"></FormCard>
                    <FormCard title="Formulaire" date="21/11/2023" id="1" className="w-80 m-4"></FormCard>
                    <FormCard title="Formulaire4" date="21/11/2023" id="1" className="w-80 m-4"></FormCard>
                    <FormCard title="Formulaire" date="21/11/2023" id="1" className="w-80 m-4"></FormCard>
                    <FormCard title="Formulaire4" date="21/11/2023" id="1" className="w-80 m-4"></FormCard>
                    <FormCard title="Formulaire" date="21/11/2023" id="1" className="w-80 m-4"></FormCard>
                    <FormCard title="Formulaire4" date="21/11/2023" id="1" className="w-80 m-4"></FormCard>
                </div>
            </div>
        </div>
    );
}

export default FormsPage;