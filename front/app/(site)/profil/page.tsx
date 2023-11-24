import Hello from "@/components/Hello"
import React from 'react';
import Button from "@/components/Button"
import Input from "@/components/Input"
import Icon from "@ant-design/icons";
import Link from "next/link";
import { Divider } from "antd"
import { FormOutlined } from '@ant-design/icons'

const ProfilPage = () => {
    return (
        <div className="bg-background h-full">
            <FormOutlined className="p-2 m-2 md:text-[30px] opacity-40 float-right" />
            <div className="flex items-center">
                <div className="ml-40">
                    <Hello firstName={"Marina"} lastName={"Flament"} />
                </div>
                <div className="ml-36 w-2/3">
                    <h3 className="text-4xl mb-4">FLAMENT Marina</h3>
                    <div className="flex">
                        <div className="w-1/2 pr-4">
                            <h1 className="text-lg underline mb-4">marina.flament@gmail.com</h1>
                            <h1 className="text-lg">INE : 10121212AZ</h1>
                        </div>
                        <div className="w-1/2">
                            <h1 className="mb-4 text-lg">Date de naissance : 12/08/2003</h1>
                            <h1 className="text-lg">N°Étudiant : 12121212</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="flex items-center justify-around p-[5%]">

                <div className="bg-background w-full max-w-[400px] bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">Changer mon mot de passe</h2>
                    <form className="flex flex-col">
                        <Input type="text" placeholder="Ancien mot de passe" className="min-w-full mb-2 bg-white"></Input>
                        <Input type="text" placeholder="Nouveau mot de passe" className="min-w-full mb-2 bg-white"></Input>
                        <Input type="text" placeholder="Nouveau mot de passe" className="min-w-full mb-2 bg-white"></Input>
                        <div className="flex justify-center pt-6">
                            <Button type="submit" className="bg-slate-700 w-10/12">
                                Changer
                            </Button>
                        </div>
                    </form>
                </div >
                <Link href="mailto:noa.watel@gmail.com" className="rounded-full text-center bg-slate-700 w-1/3 border border-transparent px-3 py-3 text-white font-bold transition" >
                    Envoyer un mail à : blabla
                </Link>
            </div >
        </div>
    );
}

export default ProfilPage;