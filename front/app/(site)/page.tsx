"use client";

import FormCard from "@/components/FormCard"
import Hello from "@/components/Hello"
import HistoryCard from "@/components/HistoryCard"
import ShortCutCard from "@/components/ShortCutCard"
import { Divider } from "antd"
import { RESTRICTED, SHORTCUT_LINKS } from "@/constants";
import { UserContext } from "@/context/userContext";
import { useContext, useEffect, useState } from "react";
import { getLast } from "@/services/forms";

const history = [
  {
    date: "28/11/2023",
    title: "Validation",
    content: "Anne Pacou et vous avez validé le formulaire Visite entreprise S5."

  },
  {
    date: "27/11/2023",
    title: "Modification",
    content: "Anne Pacou a modifié le formulaire Visite entreprise S5."

  },
  {
    date: "25/11/2023",
    title: "Enregistrement",
    content: "Anne Pacou a enregistré des réponse dans le formulaire Visite entreprise S5. Vous n'avez pas encore validé."
  },
  {
    date: "19/10/2023",
    title: "Validation",
    content: "Anne Pacou a validé le formulaire Entretrien FBI S5."

  },
  {
    date: "12/10/2023",
    title: "Enregistrement",
    content: "Vous avez enregistré des réponse dans le formulaire Entretrien FBI S5. Anne Pacou n'a pas encore validé."
  },
  {
    date: "20/09/2023",
    title: "Affectation",
    content: "Anne Pacou vous a été affectée comme tuteur pédagogique."

  }
]

interface Form {
  _id: string;
  title: string;
  date: string;
}

export default function Home() {

  const { user } = useContext(UserContext);

  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await getLast();
      setForms(res);
    };
    fetchStudents();
    
  }, []);

  if (!forms) {
    return <div>Chargement...</div>;
  }

  var role = [RESTRICTED.ALL];
  if (user.user.student) {
    role.push(RESTRICTED.STUDENT);
  }
  if (user.user.tutor) {
    role.push(RESTRICTED.TUTOR);
  }
  if (user.user.isAdmin) {
    role.push(RESTRICTED.ADMIN);
  }

  return (
    <div className="w-full flex gap-2 flex-col-reverse md:flex-row">

      <div className="md:w-3/12 ">
        <h1 className="text-2xl p-6 font-bold">Mes formulaires</h1>
        <div className="flex flex-col gap-4">
          {
            forms.map((form: Form, index) => {
              return (
                <FormCard key={index} title={form.title} id={form._id} date={form.date} className="h-28" />
              )
            })
          }
        </div>
      </div>

      <div className="w-full md:w-5/12">
        <h1 className="text-2xl p-6 font-bold">Mes raccourcis</h1>
        <div className="flex justify-around sm:grid sm:grid-cols-2 xl:gap-6 ">
          {SHORTCUT_LINKS.map((link, index) => {
            if (role.includes(link.restricted)) {
              return (
                <ShortCutCard key={index} href={link.href} label={link.label} icon={link.icon} className="" />
              )
            }
          })}
        </div>
      </div>
      <div className="h-full flex-1 px-2 pt-10 hidden md:block flex flex-col">
        <Hello />
        <Divider />
        <p className="text-[1.8vw] ml-2">Historique</p>
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
