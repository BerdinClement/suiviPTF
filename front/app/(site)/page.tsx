import FormCard from "@/components/FormCard"
import Hello from "@/components/Hello"
import HistoryCard from "@/components/HistoryCard"
import ShortCutCard from "@/components/ShortCutCard"
import { UserContext } from "@/context/userContext"
import { Divider } from "antd"
import { useContext } from "react"

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
]

const history = [
  {
    date: "12/12/2021",
    title: "Titre 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    date: "12/12/2021",
    title: "Titre 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    date: "12/12/2021",
    title: "Titre 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    date: "12/12/2021",
    title: "Titre 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    date: "12/12/2021",
    title: "Titre 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    date: "12/12/2021",
    title: "Titre 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    date: "12/12/2021",
    title: "Titre 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    date: "12/12/2021",
    title: "Titre 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    date: "12/12/2021",
    title: "Titre 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    date: "12/12/2021",
    title: "Titre 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    date: "12/12/2021",
    title: "Titre 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    date: "12/12/2021",
    title: "Titre 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    date: "12/12/2021",
    title: "Titre 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    date: "12/12/2021",
    title: "Titre 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]

export default function Home() {
  return (
    <div className="w-full flex gap-2 flex-col-reverse md:flex-row">

      <div className="md:w-3/12 ">
        <h1 className="text-2xl p-6 font-bold">Mes formulaires</h1>
        <div className="flex flex-col gap-4">
          {
            forms.map((form, index) => {
              return (
                <FormCard title={form.title} id={form.id} date={form.date} className="h-28" />
              )
            })
          }
        </div>
      </div>

      <div className="w-full md:w-5/12">
        <h1 className="text-2xl p-6 font-bold">Mes raccourcis</h1>
        <div className="flex justify-around sm:grid sm:grid-cols-2 xl:gap-6 ">
          <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="" />
          <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="" />
          <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="" />
          <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="" />
        </div>
      </div>
      <div className="h-full flex-1 px-2 py-10 hidden md:block flex flex-col">
        <Hello />
        <Divider />
        <p className="text-[1.8vw]">Historique</p>
        {
          history.map((history, index) => {
            return (
              <HistoryCard key={index} date={history.date} className="p-2 m-2" title={history.title} content={history.content} />
            )
          })
        }
      </div>
    </div>
  )
}
