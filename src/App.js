import { Routes, Route } from "react-router-dom";


import { AuthenticationLayout } from "./layouts/authentication/AuthenticationLayout";
import { DashboardLayout } from "./layouts/dashboard/DashboardLayout";
import { Logup } from "./components/logup/Logup";
import { Login } from "./components/login/Login";
import { Dashboard } from "./containers/dashboard/Dashboard";
import { Error } from "./components/error/Error";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationLayout />}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logup" element={<Logup/>}/>
      </Route>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={ <Dashboard/> } />
      </Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}
