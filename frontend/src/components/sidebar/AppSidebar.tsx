import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarProvider,
} from "@/components/ui/sidebar.tsx";
import { AppSidebarMenu } from "@/components/sidebar/AppSidebarMenu.tsx";
import { AppSidebarFooter } from "@/components/sidebar/AppSidebarFooter.tsx";
import { currentUser, logOut } from "@/components/auth/auth.slice.ts";
import { useAppDispatch, useAppSelector } from "@/store";

export function AppSidebar() {
  const clinicName = "Стоматология ВЭЛ";
  const user = useAppSelector(currentUser);
  const dispatch = useAppDispatch();

  return (
    <SidebarProvider className="absolute">
      <Sidebar>
        <SidebarHeader className="py-8">
          <div className="font-bold text-lg ml-3">{clinicName}</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <AppSidebarMenu />
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <AppSidebarFooter user={user} onLogout={() => dispatch(logOut())} />
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
