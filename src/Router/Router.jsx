import { Routes, Route } from "react-router-dom";

import { AuthenticationLayout } from "../layouts/AuthenticationLayout";
import { MainLayout } from "../layouts/MainLayout";
import { Logup } from "../components/Logup/Logup";
import { Login } from "../components/Login/Login";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { CounterData } from "../pages/CounterData/CounterData";
import { Error } from "../pages/Error/Error";

export const Router = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<AuthenticationLayout />}
            >
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/logup"
                    element={<Logup />}
                />
            </Route>
            <Route
                path="/"
                element={<MainLayout />}
            >
                <Route
                    index
                    element={<Dashboard />}
                />
                <Route
                    path="counterdata"
                    element={<CounterData />}
                />
            </Route>
            <Route
                path="*"
                element={<Error />}
            />
        </Routes>
    );
};
