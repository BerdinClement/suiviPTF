"use client"

import { UserOutlined, SolutionOutlined } from '@ant-design/icons';
import React from 'react';

interface StudentCardProps {
    name: string;
    email: string;
    year: string;
}


const StudentCard = ({ name, email, year }: StudentCardProps) => {
    {
        return (
            <div className="bg-white p-4 mx-8 mb-8 w-[290px] shadow-lg rounded-lg hover:shadow-xl">
                <h1 className="text-xl">{name}</h1>
                <h3>{email}</h3>
                <h3>{year}</h3>
                <div className="flex flex-row justify-around pt-4 text-2xl ">
                    <div className="cursor-pointer hover:text-3xl">
                        <UserOutlined />
                    </div>
                    <div className="cursor-pointer hover:text-3xl">
                        <SolutionOutlined />
                    </div>
                </div>
            </div>

        )
    }
}

export default StudentCard;