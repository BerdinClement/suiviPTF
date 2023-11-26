'use client'

import RefreshButton from "@/components/RefreshButton";
import SuiviCard from "@/components/SuiviCard"
import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal, { InputItem } from "@/components/Modal";
import React, { useState } from 'react';


const SuiviPage = () => {
    const [openModal, setOpenModal] = useState(false);

    const inputList: InputItem[] = [
        {
            type: "text",
            text: "Titre"
        },
        {
            type: "message",
            text: "Contenu "
        }
    ]

    return (
        <div className="w-full h-full bg-background">
            <div className={`px-8 ${openModal ? 'blur-sm ' : ''}`}>
                <div className="flex flex-col-reverse md:flex-row justify-between py-4">
                    <h1 className="underline text-2xl">Mes suivis</h1>
                    <Button type="button" className="bg-purple" onClick={() => setOpenModal(true)} >
                        Ajouter un suivi
                    </Button>
                </div>
                <div className="flex flex-row justify-between pb-8">
                    <div className="flex">
                        <Input type="text" placeholder="Titre : ..." className="mr-8"></Input>
                    </div>
                    <div className="flex">
                        <RefreshButton />
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    {/*  TODO : boucler sur tout les suivis existants */}
                    <SuiviCard href="/suivi/1" className="w-full md:w-60" />
                    <SuiviCard href="/suivi/1" className="w-full md:w-60" />
                    <SuiviCard href="/suivi/1" className="w-full md:w-60" />
                    <SuiviCard href="/suivi/1" className="w-full md:w-60" />
                    <SuiviCard href="/suivi/1" className="w-full md:w-60" />
                    <SuiviCard href="/suivi/1" className="w-full md:w-60" />
                    <SuiviCard href="/suivi/1" className="w-full md:w-60" />
                    <SuiviCard href="/suivi/1" className="w-full md:w-60" />
                    <SuiviCard href="/suivi/1" className="w-full md:w-60" />
                </div>
            </div>
            {openModal &&  <Modal  title="Créer un suivi"inputList={inputList} buttonText="Ajouter l'étudiant" open={openModal} onClose={() => setOpenModal(false)} />}
        </div>
    );
}

export default SuiviPage;