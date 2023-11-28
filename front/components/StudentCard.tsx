"use client"

import {UserOutlined, SolutionOutlined, DesktopOutlined} from '@ant-design/icons';
import React from 'react';

interface StudentCardProps {
    name: string;
    email: string;
    year: string;
    className?: string;
}


const StudentCard = ({ name, email, year, className }: StudentCardProps) => {
    {
        return (
            <div className={` ${className} bg-white p-4 shadow-lg rounded-lg hover:shadow-xl`}>
                <h1 className="text-xl">{name}</h1>
                <h3>{email}</h3>
                <h3>{year}</h3>
                <div className="flex flex-row justify-around pt-4 text-2xl ">
                    <div className="cursor-pointer hover:shadow-sm">
                        <UserOutlined />
                    </div>
                    <div className="cursor-pointer hover:shadow-sm">
                        <SolutionOutlined />
                    </div>
                    <div className="cursor-pointer hover:shadow-sm">
                        <DesktopOutlined />
                    </div>
                </div>
            </div>

        )
    }
}

export default StudentCard;
