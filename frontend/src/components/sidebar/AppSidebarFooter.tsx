import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { CircleUserRound, LogOut } from "lucide-react";
import { UserType } from "@/components/auth/types.ts";

export function AppSidebarFooter({
  user,
  onLogout,
}: {
  user: UserType;
  onLogout: () => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="lg">
          {user ? (
            <div className="flex flex-col">
              <div>{user.name}</div>
              <div className="font-light">{user.position}</div>
            </div>
          ) : (
            "Личный кабинет"
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {user ? user.name : "Пользователь"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CircleUserRound />
            <span>Настройки аккаунта</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => onLogout()}>
            <LogOut />
            <span>Выход</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
