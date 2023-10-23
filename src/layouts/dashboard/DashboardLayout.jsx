import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../../components/sidebar/Sidebar";
import { Header } from "../../components/header/Header";

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
