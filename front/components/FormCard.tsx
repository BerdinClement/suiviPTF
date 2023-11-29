"use client"

import Link from "next/link";

interface FormCardProps {
    activeUser?: string;
    title: string;
    date: string;
    id: string;
    className?: string;
}

const getCardColor = (date: string) => {
    const formDate = new Date(date);
    const today = new Date();
    const oneWeekLater = new Date();
    oneWeekLater.setDate(today.getDate() + 7);

    if (formDate < today) {
        return 'bg-f_red';
    } else if (formDate <= oneWeekLater && formDate > today) {
        return 'bg-f_orange';
    } else {
        return 'bg-f_green';
    }
};

const FormCard = ({ title, date, id, className, activeUser }: FormCardProps) => {
    const randomColor = getCardColor(date);

    return (
        <Link href={`${activeUser ? `/formulaires/${id}?user=${activeUser}` : `/formulaires/${id}`}`} className={`flex rounded-lg shadow-md ${randomColor} ${className}`}>
            <div className="w-3 rounded-lg"></div>
            <div className="flex flex-1 bg-white p-2 rounded-lg opacity-90">
                <div className="flex flex-col gap-4 p-2">
                    <h1 className="text-xl">{title}</h1>
                    <h3 className="text-sm italic">{new Date(date).toLocaleDateString('fr-FR')}</h3>
                </div>
            </div>
        </Link>
    )
}

export default FormCard;