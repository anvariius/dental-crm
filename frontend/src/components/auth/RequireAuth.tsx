import { useAppSelector } from "@/store";
import { currentToken } from "@/components/auth/auth.slice.ts";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function RequireAuth() {
  const token = useAppSelector(currentToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
}
