import StudentInput from "@/components/StudentInput";

const CreationPage = () => {
    return (
        <div>
            <h1 className="p-8 underline text-2xl">Créer un suivi</h1>
            <StudentInput type="text" placeholder="Titre : ..." className="min-w-full"></StudentInput>
            <textarea placeholder="Votre réponse" className="bg-white rounded-3xl border-gray-300 text-black px-2 py-1 min-w-full min-h-[200px]"></textarea>
            <StudentInput type="file" placeholder="Fichier" className=""></StudentInput>
        </div>
    );
}

export default CreationPage;