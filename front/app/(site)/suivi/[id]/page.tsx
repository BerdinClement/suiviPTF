import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import Image from 'next/image'

const nom: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'Nom',
        children: 'Flament',
    },
    {
        key: '2',
        label: 'Prenom',
        children: 'Marina',
    },
];

const promo: DescriptionsProps['items'] = [
    {
        key: '3',
        label: 'Promotion',
        children: 'BUT INFO 3 APP',
    },
];

export default function SuiviPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-background w-[700px] bg-white rounded-lg shadow-md">
                <Image src="https://loremflickr.com/600/200/paint/" alt="Header" width={90} height={10}  className="w-full h-1/3 start" />
                <div className="p-6">
                    <div className="flex">
                        <Descriptions title="" items={nom} className='' />
                        <Descriptions title="" items={promo} className='' />
                    </div>
                    <h2 className="flex justify-center text-2xl font-bold text-gray-800 mb-4">Présentation</h2>
                    <p className="">Wikipédia est un projet d’encyclopédie collective en ligne, universelle, multilingue et fonctionnant sur le principe du wiki. Ce projet vise à offrir un contenu librement réutilisable, objectif et vérifiable, que chacun peut modifier et améliorer. Wikipédia est un projet d’encyclopédie collective en ligne, universelle, multilingue et fonctionnant sur le principe du wiki. Ce projet vise à offrir un contenu librement réutilisable, objectif et vérifiable, que chacun peut modifier et améliorer.Wikipédia est un projet d’encyclopédie collective en ligne, universelle, multilingue et fonctionnant sur le principe du wiki. Ce projet vise à offrir un contenu librement réutilisable, objectif et vérifiable, que chacun peut modifier et améliorer.Wikipédia est un projet d’encyclopédie collective en ligne,<br /> universelle, multilingue et fonctionnant sur le principe du wiki. Ce projet vise à offrir un contenu librement réutilisable, objectif et vérifiable, que chacun peut modifier et améliorer.Wikipédia est un projet d’encyclopédie collective en ligne, universelle, multilingue et fonctionnant sur le principe du wiki. Ce projet vise à offrir un contenu librement réutilisable, objectif et vérifiable, que chacun peut modifier et améliorer.Wikipédia est un projet d’encyclopédie collective en ligne, universelle, multilingue et fonctionnant sur le principe du wiki. Ce projet vise à offrir un contenu librement réutilisable, objectif et vérifiable, que chacun peut modifier et améliorer.Wikipédia est un projet d’encyclopédie collective en ligne, universelle, multilingue et fonctionnant sur le principe du wiki. Ce projet vise à offrir un contenu librement réutilisable, objectif et vérifiable, que chacun peut modifier et améliorer.</p>
                  
                </div>
            </div >
        </div >
    )
}