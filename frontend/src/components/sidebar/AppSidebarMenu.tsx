import { Calendar, Home, LucideIcon, UserRoundSearch } from "lucide-react";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";

export type MenuItem = {
  title: String;
  icon: LucideIcon;
  url: string;
};

const menuItems: MenuItem[] = [
  { title: "Главная", icon: Home, url: "#" },
  { title: "Записи", icon: Calendar, url: "#" },
  { title: "Пациенты", icon: UserRoundSearch, url: "#" },
];

export function AppSidebarMenu() {
  return (
    <>
      {menuItems.map((item) => (
        <SidebarMenuItem key={JSON.stringify(item)}>
          <SidebarMenuButton asChild size="lg" className="font-semibold">
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
}
