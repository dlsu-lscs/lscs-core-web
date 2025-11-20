import {
    HomeIcon,
    UsersIcon,
    SettingsIcon,
    SunIcon,
    MoonIcon,
    LogOutIcon,
    UserIcon,
    User,
    ActivityIcon,
} from "lucide-react"
import Link from "next/link"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import Image from "next/image"

const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: <HomeIcon />
    },
    {
        name: "Metrics",
        href: "/dashboard/metrics",
        icon: <ActivityIcon />
    },
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: <SettingsIcon />
    },
]

export default function DashboardSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="p-2 mb-5">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/lscs-logo.png"
                            alt="LSCS Logo"
                            width={32}
                            height={32}
                        />
                        <h1 className="text-lg font-semibold">LSCS Core</h1>
                    </div>
                </div>
            </SidebarHeader>

            {/* Main Content links */}
            <SidebarContent>
                <SidebarMenu>
                    {links.map((item) => (
                        <SidebarMenuItem key={item.name}>
                            <SidebarMenuButton asChild className="p-7">
                                <Link href={item.href} className="flex gap-4">
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>

            {/* Footer */}
            <SidebarFooter className="p-2">

                {/* Theme switcher in dashboard */}
                <SidebarGroup>
                    <SidebarGroupLabel>Appearance</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <SunIcon />
                                Light
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <MoonIcon />
                                Dark
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarSeparator />

                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <UserIcon />
                                Profile
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <LogOutIcon />
                                Logout
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    )
}
