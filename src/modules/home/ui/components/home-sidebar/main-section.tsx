"use client"

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
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
    return ( <SidebarGroup>
        <SidebarGroupContent>
            <SidebarMenu>
            {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            tooltip={item.title}
                            asChild
                            isActive={false}
                            onClick={() => {}}
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