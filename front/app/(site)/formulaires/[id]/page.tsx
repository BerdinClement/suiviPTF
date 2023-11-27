'use client'
import QuestionForm from '@/components/QuestionForm';
import Button from '@/components/Button';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import { useEffect, useState } from 'react';
import { getFormById } from '@/services/forms';

interface Form {
    _id: string;
    title: string;
    date: string;
    questions: {
        _id: string;
        text: string;
    }[];
}

export default function FormPage({ params }: { params: { id: string } }) {

    const [form, setForm] = useState<Form>();

    useEffect(() => {
        const fetchStudents = async () => {
            const res = await getFormById(params.id);
            setForm(res);
        };
        fetchStudents();
    }, []);

    if (!form) {
        return <div>Chargement...</div>;
    }

    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Titre',
            children: form.title,
        },
        {
            key: '2',
            label: 'Date',
            children: form.date,
        },
    ];

    return (
        <div className="w-full h-full bg-background rounded-t-xl ">
            <h1 className="underline text-2xl p-[20px]">Informations du formulaire :</h1>
            <Descriptions title="" items={items} className='p-[20px]' />
            {
                form.questions.map((q) => (
                    <QuestionForm key={q._id} id={''} question={q.text} />
                ))
            }
            <div className="flex justify-center">
                <Button type="submit" className="bg-slate-700 w-4/12 ">Envoyer</Button>
            </div>
        </div>
    )
}