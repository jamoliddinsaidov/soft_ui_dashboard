import React from 'react'

// components
import Sidebar from '../components/Navigations/Sidebar'

// styles
import { StyledMainLayoutContainer, StyledMainLayout } from './styles/StyledMainLayout'

const MainLayout = ({ children }) => {
  return (
    <StyledMainLayout>
      <Sidebar />
      <StyledMainLayoutContainer>{children}</StyledMainLayoutContainer>
    </StyledMainLayout>
  )
}

export default MainLayout
