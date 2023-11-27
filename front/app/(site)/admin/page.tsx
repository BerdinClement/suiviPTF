"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import RefreshButton from "@/components/RefreshButton";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
import TutorsList from "./tutorsList";

const AdminPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(UserContext);
  const inputStudent = [
    {
      label: "Nom",
      placeholder: "Nom : ...",
      type: "text",
    },
    {
      label: "Prénom",
      placeholder: "Prénom : ...",
      type: "text",
    },
    {
      label: "E-Mail",
      placeholder: "E-Mail : ...",
      type: "email",
      pattern: ".+@etu.univ-littoral.fr",
      required: true,
    },
    {
      label: "Mot de passe",
      placeholder: "Mot de passe : ...",
      type: "password",
      required: true,
    },
  ];

  return (
    <div className="w-full h-full bg-background">
      <div className={`${openModal ? "blur-sm " : ""} px-8 `}>
        <div className="flex flex-col-reverse md:flex-row justify-between py-4">
          <h1 className="underline text-2xl">Liste des tuteurs</h1>
          <Button
            type="button"
            className="bg-purple"
            onClick={() => setOpenModal(true)}
          >
            Ajouter un tuteur
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
            <TutorsList />
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          className=""
          buttonText="Ajouter le tuteur"
          open={openModal}
          onClose={() => setOpenModal(false)}
        >
          <div className="bg-background w-full max-w-[700px] bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Créer un tuteur
            </h2>
            <form className="flex flex-col">
              {inputStudent.map((input, index) => (
                <Input
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
                  Ajouter un tuteur
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AdminPage;
