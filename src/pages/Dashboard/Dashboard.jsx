import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import TopHeader from '../../components/Headers/TopHeader'

const Dashboard = () => {
  return (
    <MainLayout>
      <TopHeader page='Dashboard' />
      <h2>This is gonna be dashboard</h2>
    </MainLayout>
  )
}

export default Dashboard
