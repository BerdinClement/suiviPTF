import Hello from "@/components/Hello"
import React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
    {
        key: '1',
        // label: 'UserName',
        children: 'BERDIN Clément',
    },
    {
        key: '2',
        // label: 'Email',
        children: 'clement@gmail.com',
    },
    {
        key: '3',
        label: 'Date de naissance',
        children: '18/05/2003',
    },
    {
        key: '4',
        label: 'INE',
        children: '101010100AB',
    },
    {
        key: '5',
        label: 'Etu',
        children: '12001200',
    },
];

const ProfilPage = () => {
    return (
        <div>
            <div className="flex start">

                <Hello firstName={"Marina"} lastName={"Flament"} />

                <div className="ml-20">
                    <Descriptions title="" items={items} />
                </div>
            </div>

            Bon courage Marina
        </div>
    );
}

export default ProfilPage;