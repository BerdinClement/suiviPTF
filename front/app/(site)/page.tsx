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
    // <div className="">
    //   <div className="flex">
    //     <div className="bg-background w-9/12 flex rounded-t-xl p-4">
    //       <div className="w-6/12">
    //         <p className="mb-4 text-xl p-4">Mes Formulaires</p>
    //         <div className="flex flex-col gap-6 pr-4">
    //           {
    //             forms.map((form, index) => {
    //               return (
    //                 <FormCard title={form.title} id={form.id} date={form.date} />
    //               )
    //             })
    //           }
    //         </div>
    //       </div>
    //       <div className="m-6/12">
    //         <p className="mb-4 text-xl">Raccourcis</p>
    //         <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="" />
    //       </div>
    //     </div>
    //     <div className="h-full flex-1 py-10 hidden md:block flex flex-col">
    //       <Hello firstName={"Clément"} lastName={"Berdin"} />
    //       <Divider />
    //       <p className="text-[1.8vw]">Historique</p>
    //       {
    //         history.map((history, index) => {
    //           return (
    //             <HistoryCard date={history.date} className="p-2 m-2" title={history.title} content={history.content} />
    //           )
    //         })
    //       }
    //     </div>
    //   </div>
    // </div>
    <div className="w-full flex flew-wrap ">
      <div className="w-4/12 ">
        <h1 className="text-2xl p-6 font-bold">Mes formulaires</h1>
        {
          forms.map((form, index) => {
            return (
              <FormCard title={form.title} id={form.id} date={form.date} className="m-4 h-28 " />
            )
          })
        }
      </div>
      <div className="w-5/12">
      <h1 className="text-2xl p-6 font-bold">Mes raccourcis</h1>
        <div className=" sm:grid sm:grid-cols-2 xl:gap-6 ">
          <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="" />
          <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="" />
          <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="" />
          <ShortCutCard href="/suivi/creation" label="Créer un suivi" className="" />
        </div>
      </div>
      <div className="w-3/12 bg-white">
        <Hello firstName={"Clément"} lastName={"Berdin"} />
        <Divider />
        <p className="text-[1.8vw]">Historique</p>
        <div className="overflow-scroll-y">
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
