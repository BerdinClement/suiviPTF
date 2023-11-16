import FormCard from "@/components/FormCard"
import ShortCutCard from "@/components/ShortCutCard"

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

export default function Home() {
  return (
    <div className="flex h-full">
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
          <p className="mb-4 text-xl">ShortCut</p>
          <ShortCutCard />
        </div>
      </div>
      <div className="bg-blue-500 2xl:bg-blue-900 h-full flex-1 hidden md:block flex flex-col">
        z
      </div>
    </div>
  )
}
