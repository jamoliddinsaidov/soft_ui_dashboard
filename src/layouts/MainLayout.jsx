import React from 'react'

// components
import Sidenav from '../components/Navigations/Sidenav'

// styles
import { StyledMainLayoutContainer, StyledMainLayout } from './styles/StyledMainLayout'

const MainLayout = ({ children }) => {
  return (
    <StyledMainLayout>
      <Sidenav />
      <StyledMainLayoutContainer>{children}</StyledMainLayoutContainer>
    </StyledMainLayout>
  )
}

export default MainLayout
