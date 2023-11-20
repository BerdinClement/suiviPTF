import ShortCutCard from "@/components/ShortCutCard"

const SuiviPage = () => {
    return (
        <div>
            <h1 className="p-8 underline text-2xl">Listes des suivis</h1>
            <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="" />

        </div>
    );
}

export default SuiviPage;