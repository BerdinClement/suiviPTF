import Input from "@/components/Input";
import Button from "@/components/Button"

const CreationPage = () => {
    return (
        <div className="bg-background h-full">
            <div className="flex items-center justify-center p-[5%]">
                <div className="bg-background w-full max-w-[700px] bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Créer un suivi</h2>
                    <form className="flex flex-col">
                        <Input type="text" placeholder="Titre : ..." className="min-w-full mb-2 bg-white"></Input>
                        <textarea placeholder="Résumé : ..." className="bg-white border border-neutral-500 mb-2 rounded-lg text-neutral-900 placeholder-black-700 text-sm px-2 py-1 min-w-full min-h-[200px]"></textarea>
                        <Input type="file" placeholder="Fichier" className="mb-2 bg-white w-6/12"></Input>
                        <div className="flex justify-center pt-6">
                            <Button type="submit" className="bg-slate-700 w-10/12">
                                Sauvegarder
                            </Button>
                        </div>
                    </form>
                </div >
            </div >
        </div>
    );
}

export default CreationPage;