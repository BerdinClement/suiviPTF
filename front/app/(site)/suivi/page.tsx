import RefreshButton from "@/components/RefreshButton";
import SuiviCard from "@/components/SuiviCard"
import Button from "@/components/Button";
import Input from "@/components/Input";

const SuiviPage = () => {
    return (
        <div className="w-full h-full bg-background">
            <div className="px-8">
                <div className="flex flex-row justify-between py-4">
                    <h1 className="underline text-2xl">Mes suivis</h1>
                    <Button type="button" className="bg-purple">
                        Ajouter un suivi
                    </Button>
                </div>
                <div className="flex flex-row justify-between pb-8">
                    <div className="flex">
                        <Input type="text" placeholder="Titre : ..." className="mr-8"></Input>
                    </div>
                    <div className="flex">
                        <RefreshButton/>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {/*  TODO : boucler sur tout les suivis existants */}
                    <SuiviCard href="/suivi/1" className="w-60 m-4" />
                    <SuiviCard href="/suivi/1" className="w-60 m-4" />
                    <SuiviCard href="/suivi/1" className="w-60 m-4" />
                    <SuiviCard href="/suivi/1" className="w-60 m-4" />
                    <SuiviCard href="/suivi/1" className="w-60 m-4" />
                    <SuiviCard href="/suivi/1" className="w-60 m-4" />
                    <SuiviCard href="/suivi/1" className="w-60 m-4" />
                    <SuiviCard href="/suivi/1" className="w-60 m-4" />
                    <SuiviCard href="/suivi/1" className="w-60 m-4" />
                </div>
            </div>
        </div>
    );
}

export default SuiviPage;