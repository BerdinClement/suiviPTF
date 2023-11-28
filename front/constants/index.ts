import { UserOutlined, LockOutlined, FileTextOutlined, FileOutlined, TeamOutlined, HomeOutlined, DesktopOutlined, FileAddOutlined } from "@ant-design/icons";

export enum RESTRICTED {
    ADMIN = 3,
    TUTOR = 2,
    STUDENT = 1,
    ALL = 0
}

export const SIDEBAR_LINKS = [
    { href: '/', key: 'accueil', label: 'Accueil', icon: HomeOutlined, restricted: RESTRICTED.ALL },
    { href: '/admin', key: 'admin', label: 'Administation', icon: LockOutlined, restricted: RESTRICTED.ADMIN },
    { href: '/formulaires', key: 'formulaires', label: 'Formulaires', icon: FileTextOutlined, restricted: RESTRICTED.ALL },
    { href: '/suivi', key: 'Suivi', label: 'Suivi', icon: DesktopOutlined, restricted: RESTRICTED.STUDENT },
    { href: '/etudiants', key: 'etudiants', label: 'Liste des étudiants', icon: TeamOutlined, restricted: RESTRICTED.TUTOR },
    { href: '/profil', key: 'profil', label: 'Profil', icon: UserOutlined, restricted: RESTRICTED.ALL },
]