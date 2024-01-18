'use client'
import QuestionForm from '@/components/QuestionForm';
import Button from '@/components/Button';
import { Descriptions, message } from 'antd';
import type { DescriptionsProps } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { getFormById, getFormByIdUser } from '@/services/forms';
import { createManyResponse } from '@/services/responses';
import { useRouter, useSearchParams } from 'next/navigation';
import { UserContext } from '@/context/userContext';

interface Form {
    _id: string;
    title: string;
    date: string;
    questions: Question[];
}

interface Question {
    _id: string;
    text: string;
    responses: Response[];
}

interface Response {
    questionId: string;
    text: string;
    student: {
        user: {
            _id: string;
        };
    };
}

export default function FormPage({ params }: { params: { id: string } }) {

    const [form, setForm] = useState<Form>();
    let [responses, setResponses] = useState<Response[]>([]);
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();
    const { user } = useContext(UserContext);
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchStudents = async () => {
            if (!searchParams.get('user')) {
                const res = await getFormById(params.id);
                setForm(res);
            } else {
                const res = await getFormByIdUser(params.id, searchParams.get('user'));
                setForm(res);
            }
        };
        fetchStudents();
    }, []);

    if (!form) {
        return <div>Chargement...</div>;
    }

    if (responses.length === 0) {
        const userResponse = form?.questions.map((question: Question) => {
            let response = question.responses.find((response: Response) => {

                return response.student?.user === (searchParams.get('user') ? searchParams.get('user') : user.user._id)
            });
            if (response !== undefined) {
                response = { questionId: question._id, ...response }
            }
            return response;
        });

        const userResponsesWithoutUndefined = userResponse?.filter((response: Response) => response !== undefined);


        const userResponsesFormated = userResponsesWithoutUndefined?.map((response: Response) => {
            if (response !== undefined) {
                return {
                    questionId: response?.questionId,
                    text: response?.text,
                    student: response?.student.user._id
                }
            }
        })
        responses = userResponsesFormated;
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
            children: new Date(form.date).toLocaleDateString('fr-FR'),
        },
    ];

    const handleSubmit = async () => {

        const res = await createManyResponse(responses);

        if (!res.status) {
            messageApi.error('Erreur lors de l\'envoi des réponses');
            return;
        }

        messageApi.success(`${res.count} réponses envoyées avec succès`);

    }

    return (
        <div className="w-full h-full bg-background rounded-t-xl ">
            {contextHolder}
            <h1 className="underline text-2xl p-[20px]">Informations du formulaire :</h1>
            <Descriptions title="" items={items} className='p-[20px]' />
            {
                form.questions.map((q) => (
                    <QuestionForm key={q._id} id={q._id} question={q.text} response={responses} setResponse={setResponses} />
                ))
            }
            {
                !searchParams.get('user') && (
                    <div className="flex justify-center">
                        <Button type="submit" onClick={handleSubmit} className="bg-slate-700 w-4/12 ">Envoyer</Button>
                    </div>)
            }
        </div>
    )
}