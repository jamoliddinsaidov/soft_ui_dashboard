import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import TopHeader from '../../components/Headers/TopHeader'
import GrowthCard from '../../components/Cards/GrowthCard'
import ActionsCard from '../../components/Cards/ActionsCard'

// styles
import { StyledGrowthCards, StyledActionsCards } from './styles/StyledDashboard'

// utils
import { GrowthCardContents } from '../../assets/contents/Dashboard/GrowthCardContents'
import { ActionsCardContent } from '../../assets/contents/Dashboard/ActionsCardContent'

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

      <StyledActionsCards>
        {ActionsCardContent.map((content, index) => (
          <ActionsCard
            title={content.title}
            subtitle={content?.subtitle}
            text={content.text}
            img={content?.img}
            bgImg={content?.bgImg}
            key={content.title + index}
          />
        ))}
      </StyledActionsCards>
    </MainLayout>
  )
}

export default Dashboard
