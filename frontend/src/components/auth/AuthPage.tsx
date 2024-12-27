import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { AuthForm } from "@/components/auth/AuthForm.tsx";
import { useState } from "react";
import { LoginPassword } from "@/components/auth/types.ts";
import { useAuthMutation } from "@/components/auth/authApi.slice.ts";
import { useAppDispatch } from "@/store";
import { setAuth } from "@/components/auth/auth.slice.ts";
import { useNavigate } from "react-router-dom";

export function AuthPage() {
  const [errorText, setErrorText] = useState("");
  const [auth] = useAuthMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (loginPassword: LoginPassword) => {
    setErrorText("");

    try {
      const { token, user } = await auth(loginPassword).unwrap();
      dispatch(setAuth({ user, token }));
      navigate("/");
    } catch (e: any) {
      switch (e.status) {
        case 401:
          return setErrorText("Неверный логин или пароль");
        default:
          return setErrorText("Ошибка сервера");
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">Авторизация</CardTitle>
        </CardHeader>
        <CardContent>
          <AuthForm onSubmit={handleSubmit} />
        </CardContent>
        <CardFooter className="justify-center">
          {errorText.length !== 0 && (
            <div className="text-red-700">{errorText}</div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
