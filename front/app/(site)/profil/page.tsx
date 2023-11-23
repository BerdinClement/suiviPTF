import Hello from "@/components/Hello"
import React from 'react';
import Button from "@/components/Button"
import Input from "@/components/Input"
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
    {
        key: '1',
        // label: 'UserName',
        children: 'BERDIN Clément',
    },
    {
        key: '2',
        // label: 'Email',
        children: 'clement@gmail.com',
    },
    {
        key: '3',
        label: 'Date de naissance',
        children: '18/05/2003',
    },
    {
        key: '4',
        label: 'INE',
        children: '101010100AB',
    },
    {
        key: '5',
        label: 'Etu',
        children: '12001200',
    },
];

const ProfilPage = () => {
    return (
        <div className="bg-background h-full">
            <div className="flex start">
                <Hello firstName={"Marina"} lastName={"Flament"} />

                <div className="ml-20">
                    <Descriptions title="" items={items} className="text-9xl" />
                </div>
            </div>
            <div className="flex items-center justify-around p-[5%]">
                <Button type="submit" className="bg-slate-700 w-1/3">
                    Envoyer un mail à :
                </Button>
                <div className="bg-background w-full max-w-[400px] bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">Changer mon mot de passe</h2>
                    <form className="flex flex-col">
                        <Input type="text" placeholder="Ancien mot de passe" className="min-w-full mb-2 bg-white"></Input>
                        <Input type="text" placeholder="Nouveau mot de passe" className="min-w-full mb-2 bg-white"></Input>
                        <Input type="text" placeholder="Nouveau mot de passe" className="min-w-full mb-2 bg-white"></Input>
                        <div className="flex justify-center pt-6">
                            <Button type="submit" className="bg-slate-700 w-10/12">
                                Sauvegarder
                            </Button>
                        </div>
                    </form>
                </div >
            </div >
            Bon courage Marina
        </div>
    );
}

export default ProfilPage;