import { UserOutlined, LockOutlined, FileTextOutlined, FileOutlined, TeamOutlined, HomeOutlined, DesktopOutlined, FileAddOutlined } from "@ant-design/icons";

export const SIDEBAR_LINKS = [
    { href: '/', key: 'accueil', label: 'Accueil', icon: HomeOutlined },
    { href: '/admin', key: 'admin', label: 'Administation', icon: LockOutlined },
    { href: '/formulaires', key: 'formulaires', label: 'Formulaires', icon: FileTextOutlined },
    { href: '/suivi', key: 'Suivi', label: 'Suivi', icon: DesktopOutlined },
    { href: '/etudiants', key: 'etudiants', label: 'Liste des étudiants', icon: TeamOutlined },
    { href: '/profil', key: 'profil', label: 'Profil', icon: UserOutlined },
]