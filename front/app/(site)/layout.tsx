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
        <div className="h-full w-full bg-background">
          {children}
        </div>
      </Header>
    </Sidebar>
  )
}
