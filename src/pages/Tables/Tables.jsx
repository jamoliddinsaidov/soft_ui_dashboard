import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import TopHeader from '../../components/Headers/TopHeader'
import AuthorsCard from '../../components/Cards/AuthorsCard'
import ProjectsCard from '../../components/Cards/ProjectsCard'

// styles
import { StyledProjectsTable } from './styles/StyledTables'

// utils
import { AuthorsCardContentHeaders, AuthorsCardContentBody } from '../../assets/contents/Tables/AuthorsCardContent'
import { ProjectsCardTableHeaders, ProjectsCardTableBody } from '../../assets/contents/Tables/ProjectsCardContent'

const Tables = () => {
  return (
    <MainLayout>
      <TopHeader page='Tables' />
      <AuthorsCard contentHeaders={AuthorsCardContentHeaders} contentBody={AuthorsCardContentBody} />
      <StyledProjectsTable>
        {/* <ProjectsCard tableHeaders={ProjectsCardTableHeaders} tableBody={ProjectsCardTableBody} /> */}
      </StyledProjectsTable>
    </MainLayout>
  )
}

export default Tables
