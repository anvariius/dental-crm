import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "@/components/auth/AuthPage.tsx";
import { RequireAuth } from "@/components/auth/RequireAuth.tsx";
import { AppLayout } from "@/components/layout/AppLayout.tsx";
import { PatientsPage } from "@/components/patients/PatientsPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<RequireAuth />}>
        <Route element={<AppLayout />}>
          <Route index element={<PatientsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
