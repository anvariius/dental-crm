import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { FormEvent, useState } from "react";
import { LoginPassword } from "@/components/auth/types.ts";

export function AuthForm({
  onSubmit,
}: {
  onSubmit: (loginPassword: LoginPassword) => void;
}) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ login, password });
  };

  return (
    <form className="space-y-4" onSubmit={handleFormSubmit}>
      <div className="space-y-2">
        <Label htmlFor="login">Логин</Label>
        <Input
          id="login"
          type="text"
          placeholder="Логин"
          required
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Пароль</Label>
        <Input
          id="password"
          type="password"
          placeholder="Пароль"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Button className="w-full">Войти</Button>
      </div>
    </form>
  );
}
