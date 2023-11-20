import FormCard from "@/components/FormCard"
import Hello from "@/components/Hello"
import HistoryCard from "@/components/HistoryCard"
import ShortCutCard from "@/components/ShortCutCard"
import { Divider } from "antd"

const forms = [
  {
    id: "1",
    title: "Formulaire 1",
    date: "12/12/2021",
  },
  {
    id: "2",
    title: "Formulaire 2",
    date: "12/12/2021",
  },
  {
    id: "3",
    title: "Formulaire 3",
    date: "12/12/2021",
  },
  {
    id: "4",
    title: "Formulaire 4",
    date: "12/12/2021",
  },
  {
    id: "5",
    title: "Formulaire 5",
    date: "12/12/2021",
  },
  {
    id: "6",
    title: "Formulaire 6",
    date: "12/12/2021",
  },
  {
    id: "7",
    title: "Formulaire 7",
    date: "12/12/2021",
  },
  {
    id: "8",
    title: "Formulaire 8",
    date: "12/12/2021",
  },
  {
    id: "9",
    title: "Formulaire 9",
    date: "12/12/2021",
  },
  {
    id: "10",
    title: "Formulaire 10",
    date: "12/12/2021",
  },
  {
    id: "11",
    title: "Formulaire 11",
    date: "12/12/2021",
  },
  {
    id: "12",
    title: "Formulaire 12",
    date: "12/12/2021",
  },
  {
    id: "13",
    title: "Formulaire 13",
    date: "12/12/2021",
  },
  {
    id: "14",
    title: "Formulaire 14",
    date: "12/12/2021",
  }
]

const history = [
  {
    date: "12/12/2021",
    title: "Titre 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl"

  },
  {
    date: "12/12/2021",
    title: "Titre 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl"

  },
  {
    date: "12/12/2021",
    title: "Titre 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl"

  },
  {
    date: "12/12/2021",
    title: "Titre 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl"

  },
  {
    date: "12/12/2021",
    title: "Titre 5",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl"

  }
]

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex">
        <div className="bg-grey w-9/12 h-full flex rounded-t-xl p-4">
          <div className="w-9/12">
            <p className="mb-4 text-xl p-4">Mes Formulaires</p>
            <div className="flex flex-col gap-6 pr-4">
              {
                forms.map((form, index) => {
                  return (
                    <FormCard title={form.title} id={form.id} date={form.date} />
                  )
                })
              }
            </div>
          </div>
          <div>
            <p className="mb-4 text-xl">Raccourcis</p>
            <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="" />
          </div>
        </div>
        <div className="h-full flex-1 py-10 hidden md:block flex flex-col">
          <Hello firstName={"Clément"} lastName={"Berdin"} />
          <Divider />
          <p className="text-[1.8vw]">Historique</p>
          {
            history.map((history, index) => {
              return (
                <HistoryCard date={history.date} className="p-2 m-2" title={history.title} content={history.content} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
