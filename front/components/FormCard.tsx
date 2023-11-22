"use client"

import Link from "next/link";

interface FormCardProps {
    title: string;
    date: string;
    id: string;
    className?: string;
}

const FormCard = ({ title, date, id, className }: FormCardProps) => {

    return (
        <Link href={`/formulaires/${id}`} className={`flex rounded-lg bg-f_green shadow-md ${className} `}>
            <div className="w-3 rounded-lg">

            </div>
            <div className="flex flex-1 bg-white p-2 rounded-lg opacity-90">
                <div className="flex flex-col gap-4 p-2">
                    <h1 className="text-xl">{title}</h1>
                    <h3 className="text-sm italic">{date}</h3>
                </div>
            </div>
        </Link>
    )
}

export default FormCard;