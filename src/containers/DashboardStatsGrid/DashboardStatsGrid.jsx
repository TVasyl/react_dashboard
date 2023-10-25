import React from 'react'

import { StatisticBox } from '../../components/StatisticBox/StatisticBox';

export const DashboardStatsGrid = () => {
  return (
      <div className="flex gap-4 w-full">
          <StatisticBox
              iconColor={"sky"}
              title={"Total Sales"}
              currency={"$"}
              amount={34525.6}
              profit={"+234"}
          />
          <StatisticBox
              iconColor={"red"}
              title={"Total Expenses"}
              currency={"$"}
              amount={25687.6}
              profit={"+542"}
          />
          <StatisticBox
              iconColor={"yellow"}
              title={"Total Customers"}
              amount={245}
              profit={"-1"}
          />
          <StatisticBox
              iconColor={"green"}
              title={"Total Orders"}
              amount={1457}
              profit={"+34"}
          />
      </div>
  );
}