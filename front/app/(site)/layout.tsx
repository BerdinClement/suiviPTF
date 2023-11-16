import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Sidebar>
      <Header>
        {children}
      </Header>
    </Sidebar>
  )
}
