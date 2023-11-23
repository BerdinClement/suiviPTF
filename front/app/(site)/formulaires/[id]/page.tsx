import QuestionForm from '@/components/QuestionForm';
import Button from '@/components/Button';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'Titre',
        children: 'Formulaire 1 ',
    },
    {
        key: '2',
        label: 'Date',
        children: '22/11/2023',
    },
];

export default function FormPage({ params }: { params: { id: string } }) {

    return (
        <div className="w-full h-full bg-background rounded-t-xl ">
            <h1 className="underline text-2xl p-[20px]">Informations du formulaire :</h1>
            <Descriptions title="" items={items} className='p-[20px]' />
            {/* TODO : Boucler sur toutes les questions */}
            <QuestionForm id="1" question="Quel âge avez vous ?" />
            <QuestionForm id="2" question="Quel est votre prénom ?" />
            <QuestionForm id="3" question="Quel est votre nom ?" />
            <div className="flex justify-center">
                <Button type="submit" className="bg-slate-700 w-4/12 ">Envoyer</Button>
            </div>
        </div>
    )
}