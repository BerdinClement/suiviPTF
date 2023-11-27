"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import RefreshButton from "@/components/RefreshButton";
import React, { useState } from "react";
import StudentsList from "./studentsList";
import Modal from "@/components/Modal";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
import { createStudent } from "@/services/users";
import { message } from "antd";

const StudentsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ine, setIne] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const inputStudent = [
    {
      label: "Nom",
      placeholder: "Nom : ...",
      type: "text",
      value: lastName,
      setValue: setLastName,
    },
    {
      label: "Prénom",
      placeholder: "Prénom : ...",
      type: "text",
      value: firstName,
      setValue: setFirstName,
    },
    {
      label: "E-Mail",
      placeholder: "E-Mail : ...",
      type: "email",
      pattern: ".+@etu.univ-littoral.fr",
      required: true,
      value: email,
      setValue: setEmail,
    },
    {
      label: "Mot de passe",
      placeholder: "Mot de passe : ...",
      type: "password",
      required: true,
      value: password,
      setValue: setPassword,
    },
    {
      label: "Numéro INE",
      placeholder: "Numéro INE : ...",
      type: "text",
      value: ine,
      setValue: setIne,
    },
    {
      label: "Numéro Étudiant",
      placeholder: "Numéro Étudiant : ...",
      type: "text",
      value: studentNumber,
      setValue: setStudentNumber,
    },
  ];

  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await createStudent(
        email,
        password,
        firstName,
        lastName,
        ine,
        studentNumber
      );

      if (!res.status) {
        messageApi.open({
          type: 'error',
          content: 'Une erreur est survenue lors de la création de l\'étudiant ! ',
        });
        setEmail("");
        setPassword("");
        setIne("");
        setStudentNumber("");
        setLastName("");
        setFirstName("");
        setOpenModal(false);
        return;
      }

      messageApi.open({
        type: 'success',
        content: 'L\'étudiant a bien été créé ! ',
      });
      setEmail("");
      setPassword("");
      setIne("");
      setStudentNumber("");
      setLastName("");
      setFirstName("");
      setOpenModal(false);


    } catch (error) {

    }
  };

  return (
    <div className="w-full h-full bg-background">
      {contextHolder}
      <div className={`${openModal ? "blur-sm " : ""} px-8 `}>
        <div className="flex flex-col-reverse md:flex-row justify-between py-4">
          <h1 className="underline text-2xl">Liste des étudiants</h1>
          <Button
            type="button"
            className={`${user.user.student ? "hidden" : ""} bg-purple`}
            onClick={() => setOpenModal(true)}
          >
            Ajouter un étudiant
          </Button>
        </div>
        <div className="">
          <div className="flex flex-row justify-between pb-8">
            <div className="flex">
              <Input
                type="text"
                placeholder="Titre : ..."
                className="mr-8"
              ></Input>
            </div>
            <div className="flex">
              <RefreshButton />
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <StudentsList />
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          className=""
          buttonText="Ajouter l'étudiant"
          open={openModal}
          onClose={() => setOpenModal(false)}
        >
          <div className="bg-background w-full max-w-[700px] bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Créer un étudiants
            </h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              {inputStudent.map((input, index) => (
                <Input
                  value={input.value}
                  setValue={input.setValue}
                  type={input.type}
                  placeholder={input.placeholder}
                  className="min-w-full mb-2 bg-white"
                  pattern={input.pattern}
                  required={input.required}
                  key={index}
                ></Input>
              ))}
              <div className="flex justify-center pt-6">
                <Button type="submit" className="bg-slate-700 w-10/12">
                  Ajouter un étudiant
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default StudentsPage;
