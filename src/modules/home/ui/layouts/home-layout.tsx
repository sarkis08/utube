import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavBar } from "../components/home-navbar";
import HomeSidebar from "../components/home-sidebar";

type HomeLayoutProps = {
  children: React.ReactNode;
};
export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavBar />
        <div className="flex min-h-screen pt-[4rem]">
            {/* Sidebar */}
            <HomeSidebar />
            <main className="flex-1 overflow-y-auto">
            {children}
            </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
