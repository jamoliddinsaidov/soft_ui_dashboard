import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import TopHeader from '../../components/Headers/TopHeader'
import GrowthCard from '../../components/Cards/GrowthCard'

// styles
import { StyledGrowthCards } from './styles/StyledDashboard'

// utils
import { GrowthCardContents } from '../../assets/contents/Dashboard/GrowthCardContents'

const Dashboard = () => {
  return (
    <MainLayout>
      <TopHeader page='Dashboard' />

      <StyledGrowthCards>
        {GrowthCardContents.map((content, index) => (
          <GrowthCard
            title={content.title}
            data={content.data}
            percent={content.percent}
            icon={content.icon}
            key={content.title + index}
          />
        ))}
      </StyledGrowthCards>
    </MainLayout>
  )
}

export default Dashboard
