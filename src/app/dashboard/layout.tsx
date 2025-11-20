import {
    SidebarProvider,
    SidebarTrigger,
    SidebarInset,
} from "@/components/ui/sidebar"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <SidebarInset className="bg-yellow-200">
                <SidebarTrigger />
                <header className="flex h-12 items-center gap-2 border-b bg-background p-2">
                </header>
                <main className="flex-1 overflow-auto p-4">{children}</main>
            </SidebarInset>
            <h2 className="text-lg font-semibold">LSCS Core</h2>
        </SidebarProvider>
    )
}
