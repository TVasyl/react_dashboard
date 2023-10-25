import React from 'react'

import { StatisticBox } from '../../components/StatisticBox/StatisticBox';

export const DashboardStatsGrid = () => {
  return (
      <div className="flex gap-4 w-full">
          <StatisticBox
              iconColor={"bg-sky-500"}
              title={"Total Sales"}
              currency={"$"}
              amount={34525.6}
              profit={"+234"}
          />
          <StatisticBox
              iconColor={"bg-red-500"}
              title={"Total Expenses"}
              currency={"$"}
              amount={25687.6}
              profit={"-542"}
          />
          <StatisticBox
              iconColor={"bg-yellow-500"}
              title={"Total Customers"}
              amount={245}
              profit={"-1"}
          />
          <StatisticBox
              iconColor={"bg-green-500"}
              title={"Total Orders"}
              amount={1457}
              profit={"+34"}
          />
      </div>
  );
}