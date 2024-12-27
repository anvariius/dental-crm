import { AppSidebar } from "@/components/sidebar/AppSidebar.tsx";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <AppSidebar />
      <div className="pl-[20rem] py-12 pr-12 absolute w-full">
        <Outlet />
      </div>
    </>
  );
}
