'use client'

import FormCard from "@/components/FormCard";
import { getAllForms } from "@/services/forms";
import { useEffect, useState } from "react";

interface FormProp {
    title: string;
    date: string;
    _id: string;
}

const FormsList = () => {
    const [forms, setForms] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const res = await getAllForms();
            setForms(res);
        };
        fetchStudents();
    }, []);

    if (!forms) {
        return <div>Chargement...</div>;
    }

    return (
        <>
                {
                    forms.map((form: FormProp) => (
                        <FormCard title={form.title} date={form.date} id={form._id} key={form._id} className="w-full md:w-80"/>
                    ))
                }
        </>
    );
};

export default FormsList;