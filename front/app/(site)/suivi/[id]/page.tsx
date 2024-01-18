import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import Image from 'next/image'

const suivis = [
    {
        id: "1",
        title: 'Développement d\'un blog',
        contenu: `
        La mission de développement web consiste à concevoir et mettre en place un blog dynamique,
        offrant une plateforme engageante pour partager du contenu. En tant que développeur full-stack,
        la première étape sera de comprendre les besoins spécifiques du client et les fonctionnalités
        attendues pour le blog. Cela implique une analyse approfondie des exigences, allant de
        l'interface utilisateur à la gestion des commentaires et à la navigation intuitive.
      
        La conception du blog doit être à la fois esthétique et fonctionnelle. En utilisant des
        technologies front-end modernes, je m'assurerai que l'interface utilisateur soit conviviale,
        responsive et conforme aux dernières tendances en matière de design. L'objectif est de créer
        une expérience de lecture agréable tout en facilitant la publication de contenu. Des
        fonctionnalités telles que la recherche, les catégories et les tags seront intégrées pour
        optimiser la navigation.
      
        Le cœur de la mission réside dans le développement du back-end robuste pour gérer
        efficacement le contenu du blog. Cela inclut la création d'une base de données pour stocker
        les articles, la mise en place d'un système de gestion de contenu (CMS) personnalisé,
        et l'implémentation de fonctionnalités de publication et de modification. La sécurité des
        données sera une priorité, avec des mécanismes de sauvegarde réguliers et des contrôles
        d'accès stricts.
      
        Une fois le blog développé, une phase de tests approfondis sera entreprise pour identifier
        et résoudre tout problème potentiel. Cela inclura des tests d'interface utilisateur, des tests
        de performances et des tests de sécurité. Après le déploiement, un plan de maintenance sera
        établi pour assurer la pérennité du blog, y compris les mises à jour régulières, le suivi
        des performances et le support technique continu.
      `,
    },
    {
        id: "2",
        title: 'Cybersécurité',
        contenu: `
        La mission de cybersécurité vise à assurer la protection et l'intégrité des systèmes
        d'information contre les menaces numériques. En tant que professionnel de la cybersécurité,
        la première étape sera de réaliser une évaluation approfondie des vulnérabilités existantes
        et des risques potentiels. Ceci inclut l'analyse des systèmes, des réseaux et des pratiques
        actuelles pour identifier les points faibles.
      
        La conception et la mise en place de mesures de sécurité efficaces sont essentielles pour
        contrer les cybermenaces. Cela implique le déploiement de pare-feu, de systèmes de détection
        d'intrusion, et la configuration de politiques de sécurité robustes. Les pratiques de
        sécurité des données seront renforcées, incluant le cryptage des données sensibles et la
        gestion sécurisée des identifiants.
      
        La surveillance constante des activités suspectes est cruciale pour détecter les menaces
        à temps. Un système de détection d'incident sera mis en place pour signaler et répondre
        rapidement à toute tentative d'intrusion. Des plans de réponse aux incidents seront élaborés,
        détaillant les actions à entreprendre en cas de violation de la sécurité.
      
        La sensibilisation à la sécurité joue un rôle clé dans la protection des systèmes.
        Des programmes de formation seront mis en place pour sensibiliser le personnel aux meilleures
        pratiques en matière de sécurité informatique. En outre, des mises à jour régulières des
        systèmes et des logiciels seront effectuées pour garantir la résistance constante contre
        les nouvelles menaces.
      
        Cette mission de cybersécurité vise à établir une défense solide contre les cybermenaces,
        en combinant une approche proactive, des technologies de pointe et une sensibilisation
        continue. La protection des données et la préservation de l'intégrité des systèmes sont
        au cœur de cette mission.
      `
    },
    {
        id: "3",
        title: 'Présentation',
        contenu: 'J\'ai installé le projet WORDPRESS Omertiny sur mon local (problème avec le port). Au niveau des extra services dans la page de réservation, j\'ai séparé des adultes et des enfants. J\'ai codé le fait de séparer les petits dej enfants et adultes.',
    },
    {
        id: "4",
        title: 'Présentation',
        contenu: 'J\'ai installé le projet WORDPRESS Omertiny sur mon local (problème avec le port). Au niveau des extra services dans la page de réservation, j\'ai séparé des adultes et des enfants. J\'ai codé le fait de séparer les petits dej enfants et adultes.',
    }
]
    
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
    const suivi = suivis.find(suivi => suivi.id === params.id);
    return (
        <div className="flex items-center justify-center">
            <div className="bg-background w-[700px] bg-white rounded-lg shadow-md">
                <Image src="https://loremflickr.com/600/200/paint/" alt="Header" width={90} height={10}  className="w-full h-1/3 start" />
                <div className="p-6">
                    <div className="flex">
                        <Descriptions title="" items={nom} className='' />
                        <Descriptions title="" items={promo} className='' />
                    </div>
                    <h2 className="flex justify-center text-2xl font-bold text-gray-800 mb-4">{suivi?.title}</h2>
                    <p className="text-justify">
                        {suivi?.contenu}
                    </p>
                </div>
            </div >
        </div >
    )
}