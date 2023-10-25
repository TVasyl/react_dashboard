import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";

export const DashboardLayout = () => {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="w-full">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};
