"use client";

import Hello from "@/components/Hello";
import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Icon from "@ant-design/icons";
import Link from "next/link";
import { UserContext } from "@/context/userContext";
import { Divider } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { useContext } from "react";

const ProfilPage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-background h-full">
      <FormOutlined className="p-2 m-2 text-[20px] opacity-40 float-right" />
      <div className="flex items-center">
        <div className="hidden md:block ml-40">
          <Hello />
        </div>
        <div className="p-4 md:ml-36">
          <h3 className="text-4xl mb-4">
            {user.user.lastName + " " + user.user.firstName}
          </h3>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="pr-4">
              <h1 className="text-lg underline md:mb-4">{user.user.email}</h1>
              <h1 className="text-lg">INE : {user.user.student.ine}</h1>
            </div>
            <div className="">
              <h1 className="md:mb-4 text-lg">
                Tuteur : {user.user.student.tutor}
              </h1>
              <h1 className="text-lg">
                N°Étudiant : {user.user.student.num_etu}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-around p-[5%]">
        <div className="bg-background w-full max-w-[400px] bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
            Changer mon mot de passe
          </h2>
          <form className="flex flex-col">
            <Input
              type="text"
              placeholder="Ancien mot de passe"
              className="min-w-full mb-2 bg-white"
            ></Input>
            <Input
              type="text"
              placeholder="Nouveau mot de passe"
              className="min-w-full mb-2 bg-white"
            ></Input>
            <Input
              type="text"
              placeholder="Nouveau mot de passe"
              className="min-w-full mb-2 bg-white"
            ></Input>
            <div className="flex justify-center pt-6">
              <Button type="submit" className="bg-slate-700 w-10/12">
                Changer
              </Button>
            </div>
          </form>
        </div>
        <Link
          href="mailto:noa.watel@gmail.com"
          className="rounded-full text-center bg-slate-700 md:w-1/3 border border-transparent px-3 py-3 text-white font-bold transition"
        >
          Envoyer un mail à : blabla
        </Link>
      </div>
    </div>
  );
};

export default ProfilPage;
