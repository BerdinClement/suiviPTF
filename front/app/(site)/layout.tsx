import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import dynamic from "next/dynamic"

const Protected = dynamic(() => import('./Protected'), { ssr: false })

export default function layout({
    children,
}: {
    children: React.ReactNode
}) {


    return (
        <Protected>
            <Sidebar>
                <Header>
                    {children}
                </Header>
            </Sidebar>
        </Protected>
    )
}
