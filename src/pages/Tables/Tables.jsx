import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import TopHeader from '../../components/Headers/TopHeader'
import AuthorsCard from '../../components/Cards/AuthorsCard'
import ProjectsCard from '../../components/Cards/ProjectsCard'
import MainFooter from '../../components/Footers/MainFooter'

// styles
import { StyledProjectsTable, StyledPCTable } from './styles/StyledTables'
import { StyledTopHeader } from '../../components/Headers/styles/TopHeader'
// utils
import { AuthorsCardContentHeaders, AuthorsCardContentBody } from '../../assets/contents/Tables/AuthorsCardContent'
import { ProjectsCardTableHeaders, ProjectsCardTableBody } from '../../assets/contents/Tables/ProjectsCardContent'

const Tables = () => {
  return (
    <MainLayout>
      <StyledTopHeader>
        <TopHeader page='Tables' />
      </StyledTopHeader>

      <AuthorsCard contentHeaders={AuthorsCardContentHeaders} contentBody={AuthorsCardContentBody} />
      <StyledProjectsTable>
        <ProjectsCard
          tableHeaders={ProjectsCardTableHeaders}
          tableBody={ProjectsCardTableBody}
          StyledPCTable={StyledPCTable}
        />
      </StyledProjectsTable>
      <MainFooter />
    </MainLayout>
  )
}

export default Tables
