import ShortCutCard from "@/components/ShortCutCard"
import SuiviCard from "@/components/SuiviCard"

const SuiviPage = () => {
    return (
        <div className=" bg-grey lg:bg-background h-full">
            <h1 className="p-8 underline text-2xl">Listes des suivis</h1>
            <div className="flex flex-wrap m-4 ">
                <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="w-60 m-4" />
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
    );
}

export default SuiviPage;