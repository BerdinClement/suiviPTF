import { UserOutlined, LockOutlined, FileTextOutlined, FileOutlined, TeamOutlined, HomeOutlined, DesktopOutlined, FileAddOutlined } from "@ant-design/icons";

export const SIDEBAR_LINKS = [
    { href: '/', key: 'accueil', label: 'Accueil', icon: HomeOutlined},
    { href: '/admin', key: 'admin', label: 'Administation', icon: LockOutlined },
    { href: '/formulaires', key: 'formulaires', label: 'Formulaires', icon: FileTextOutlined },
    { href: '/dashboard', key: 'dashboard', label: 'Dashboard', icon: DesktopOutlined },
    { href: '/students', key: 'etudiants', label: 'Liste des étudiants', icon: TeamOutlined },
    { href: '/profil', key: 'profil', label: 'Profil', icon: UserOutlined },    
]

export const SHORTCUT_LINKS = [
    { href: '/suivi/create', key: 'createsuivi', label: 'Créer un suivi', icon: FileAddOutlined},
    { href: '/suivis', key: 'suivis', label: 'Suivis', icon: FileOutlined},
    { href: '/suivi/create', key: 'createsuivi', label: 'Créer un suivi', icon: DesktopOutlined},
    { href: '/suivis', key: 'suivis', label: 'Suivis', icon: UserOutlined},
]