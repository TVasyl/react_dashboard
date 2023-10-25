import React from 'react'
import { DashboardStatsGrid } from '../../containers/DashboardStatsGrid/DashboardStatsGrid'
import { TransactionChart } from '../../containers/TransactionChart/TransactionChart'

export const  Dashboard = () => {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <DashboardStatsGrid />
      <TransactionChart/>
    </div>
  )
}
