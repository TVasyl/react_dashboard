import React from "react";
import { DashboardStatsGrid } from "../../containers/DashboardStatsGrid/DashboardStatsGrid";
import { TransactionChart } from "../../containers/TransactionChart/TransactionChart";
import { BuyerProfileChart } from "../../containers/BuyerProfileChart/BuyerProfileChart";
import { ProductsList } from "../../containers/ProductsList/ProductsList";
import { PopularProducts } from "../../containers/PopularProducts/PopularProducts";

export const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4 p-4 h-full pb-16 overflow-scroll">
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                <BuyerProfileChart />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <ProductsList />
                <PopularProducts />
            </div>
        </div>
    );
};
