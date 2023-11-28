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
                <FormCard title={form.title} id={form._id} date={form.date} className="h-28" />
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
                <ShortCutCard href={link.href} label={link.label} icon={link.icon} className="" />
              )
            }
          })}
        </div>
      </div>
      <div className="h-full flex-1 px-2 pt-10 hidden md:block flex flex-col">
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
