import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import TopHeader from '../../components/Headers/TopHeader'
import GrowthCard from '../../components/Cards/GrowthCard'
import ActionsCard from '../../components/Cards/ActionsCard'
import ProjectsCard from '../../components/Cards/ProjectsCard'
import OrdersCard from '../../components/Cards/OrdersCard'
import MainFooter from '../../components/Footers/MainFooter'

// styles
import {
  StyledGrowthCards,
  StyledActionsCards,
  StyledProjectsContainer,
  StyledProjectsCard,
  StyledPCTable,
} from './styles/StyledDashboard'
import { StyledTopHeader } from '../../components/Headers/styles/TopHeader'

// contents
import { GrowthCardContents } from '../../assets/contents/Dashboard/GrowthCardContents'
import { ActionsCardContent } from '../../assets/contents/Dashboard/ActionsCardContent'
import { ProjectsCardTableHeaders, ProjectsCardTableBody } from '../../assets/contents/Dashboard/ProjectsCardContent'
import { OrdersCardContent } from '../../assets/contents/Dashboard/OrdersCardContent'

const Dashboard = () => {
  return (
    <MainLayout>
      <StyledTopHeader>
        <TopHeader page='Dashboard' />
      </StyledTopHeader>

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

      <StyledProjectsContainer>
        <OrdersCard content={OrdersCardContent} />
        <StyledProjectsCard>
          <ProjectsCard
            tableHeaders={ProjectsCardTableHeaders}
            tableBody={ProjectsCardTableBody}
            StyledPCTable={StyledPCTable}
          />
        </StyledProjectsCard>
      </StyledProjectsContainer>

      <MainFooter />
    </MainLayout>
  )
}

export default Dashboard
