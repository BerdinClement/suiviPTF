"use client"

import StudentCard from "@/components/StudentCard";
import Input from "@/components/Input";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import RefreshButton from "@/components/RefreshButton";
import Popup, { InputItem } from "@/components/Popup";
import React, { useState } from "react";

const StudentsPage = () => {
    const [open, setOpen] = useState(false);

    const closePopup = () => {
        setOpen(false);
    };

    const optionList: string[] = ["Test 1", "Test 2", "Test 3"];
    const inputList: InputItem[] = [
        {
            type: "text",
            text: "Prénom"
        },
        {
            type: "number",
            text: "Âge"
        }
    ]

    return (
        <div>
            <div className="flex flex-row justify-between py-4">
                <h1 className="underline text-2xl">Liste des étudiants</h1>
                <Button type="button" className="bg-purple" onClick={() => setOpen(!open)}>
                    {open ? 'Fermer' : 'Ajouter un étudiant'}
                </Button>
            </div>
            <div className={`px-8 ${open ? 'blur-sm ' : ''}`}>

                <div className="flex flex-row justify-between pb-8">
                    <div className="flex">
                        <Input type="text" placeholder="Mail : ..." className="mr-8"></Input>
                        <Input type="text" placeholder="Prénom : ..." className="mr-8"></Input>
                        <Dropdown className="" options={optionList}></Dropdown>
                    </div>
                    <div className="flex">
                        <RefreshButton></RefreshButton>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
                    <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
                    <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
                    <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
                    <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
                    <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
                    <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
                    <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
                    <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
                    <StudentCard name="BERDIN Clément" email="c.berdin@etu.univ-littoral.fr" year="BUT3 APP"></StudentCard>
                </div>
            </div>
            {open && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Popup title="Ajouter un étudiant" inputList={inputList} buttonText="Ajouter l'étudiant" onClose={closePopup}></Popup>
                </div>
            )}
        </div>
    );
}

export default StudentsPage;