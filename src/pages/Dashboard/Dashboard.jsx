import React from "react";
import { DashboardStatsGrid } from "../../containers/DashboardStatsGrid/DashboardStatsGrid";
import { TransactionChart } from "../../containers/TransactionChart/TransactionChart";
import { BuyerProfileChart } from "../../containers/BuyerProfileChart/BuyerProfileChart";

export const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4 p-4">
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                <BuyerProfileChart />
            </div>
        </div>
    );
};
