"use client"

import {UserOutlined, SolutionOutlined, DesktopOutlined} from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';

interface StudentCardProps {
    name: string;
    email: string;
    year: string;
    className?: string;
    isTutor?: boolean;
}

const StudentCard = ({ name, email, year, className, isTutor }: StudentCardProps) => {
    {
        return (
            <div className={` ${className} bg-white p-4 shadow-lg rounded-lg hover:shadow-xl`}>
                <h1 className="text-xl">{name}</h1>
                <h3>{email}</h3>
                <h3>{year}</h3>
                { !isTutor &&
                    <div className="flex flex-row justify-around pt-4 text-2xl ">
                        <Link href={'/'} className="hover:shadow-sm">
                            <SolutionOutlined />
                        </Link>
                        <Link href={'/'} className="cursor-pointer hover:shadow-sm">
                            <DesktopOutlined />
                        </Link>
                    </div>
                }
            </div>
        )
    }
}

export default StudentCard;
