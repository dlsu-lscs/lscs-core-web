import {
    HomeIcon,
    UsersIcon,
    SettingsIcon,
    SunIcon,
    MoonIcon,
    LogOutIcon,
    UserIcon,
    User,
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
} from "@/components/ui/sidebar"
import Image from "next/image"

const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: <HomeIcon />
    },
    {
        name: "Users",
        href: "/dashboard/users",
        icon: <UsersIcon />
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
            <SidebarHeader className="p-2">
                <div className="flex items-center gap-2">
                    <Image
                        src="/lscs-logo.png"
                        alt="LSCS Logo"
                        width={32}
                        height={32}
                    />
                    <h1 className="text-lg font-semibold">LSCS Core</h1>
                </div>
            </SidebarHeader>

            {/* Main Content links */}
            <SidebarContent>
                <SidebarMenu>
                    {links.map((item) => (
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href={item.href}>
                                    {item.icon}
                                    {item.name}
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
