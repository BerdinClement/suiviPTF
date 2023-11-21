import ShortCutCard from "@/components/ShortCutCard"

const SuiviPage = () => {
    return (
        <div className="bg-background h-full">
            <h1 className="p-8 underline text-2xl">Listes des suivis</h1>
            <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="w-1/6 ml-4" />
        </div>
    );
}

export default SuiviPage;