import FormCard from "@/components/FormCard";
import Input from "@/components/Input";
import Button from "@/components/Button";
import RefreshButton from "@/components/RefreshButton";
import FormsList from "./FormsList";

const FormsPage = () => {
    return (
        <div className="w-full h-full bg-background">
            <div className="px-8">
                <div className="flex flex-col-reverse md:flex-row justify-between py-4">
                    <h1 className="underline text-2xl">Mes formulaires</h1>
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
                        <RefreshButton/>
                    </div>
                </div>
                {/* TODO : boucler sur tout les formulaires existants*/}
                <div className="flex flex-wrap gap-4 w-full">
                    <FormsList/>
                </div>
            </div>
        </div>
    );
}

export default FormsPage;