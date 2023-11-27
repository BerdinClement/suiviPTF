'use client'

import RefreshButton from "@/components/RefreshButton";
import SuiviCard from "@/components/SuiviCard"
import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import React, { useState } from 'react';


const SuiviPage = () => {
    const [openModal, setOpenModal] = useState(false);

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
            {openModal &&  <Modal  className="w-[700px]" buttonText="Ajouter l'étudiant" open={openModal} onClose={() => setOpenModal(false)}>
                <div className="bg-background w-full max-w-[700px] bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Créer un suivi</h2>
                    <form className="flex flex-col">
                        <Input type="text" placeholder="Titre : ..." className="min-w-full mb-2 bg-white"></Input>
                        <textarea placeholder="Résumé : ..." className="bg-white border border-neutral-500 mb-2 rounded-lg text-neutral-900 placeholder-black-700 text-sm px-2 py-1 min-w-full min-h-[200px]"></textarea>
                        <Input type="file" placeholder="Fichier" className="mb-2 bg-white w-6/12"></Input>
                        <div className="flex justify-center pt-6">
                            <Button type="submit" className="bg-slate-700 w-10/12">
                                Ajouter un suivi
                            </Button>
                        </div>
                    </form>
                </div >
            </Modal>}
        </div>
    );
}

export default SuiviPage;
