"use client"

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import { useAuth, useClerk } from "@clerk/nextjs"
import Link from "next/link";

const items = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon,
    },
    {
        title: "Subscriptions",
        url: "/feed/subscription",
        icon: PlaySquareIcon,
        auth: true,
    },
    {
        title: "Trending",
        url: "/feed/trending",
        icon: FlameIcon,
    },
]

const MainSection = () => {
    const { openSignIn } = useClerk()
    const { isSignedIn } = useAuth()

    return ( <SidebarGroup>
        <SidebarGroupContent>
            <SidebarMenu>
            {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            tooltip={item.title}
                            asChild
                            isActive={false}
                            onClick={(e) => {
                                if (item.auth &&!isSignedIn) {
                                    e.preventDefault()
                                    return openSignIn()
                                }
                            }}
                        >
                            <Link href={item.url} className="flex items-center gap-4">
                                <item.icon className="h-6 w-6" />
                                <span className="text-sm">{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup> );
}
 
export default MainSection;