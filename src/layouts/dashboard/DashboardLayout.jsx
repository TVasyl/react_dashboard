import React from 'react'
import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/sidebar/Sidebar'
import { Header } from '../../components/header/Header'

export const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Outlet/>
    </>
  )
}
