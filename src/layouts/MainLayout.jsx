import React, { useEffect } from 'react'

// components
import Sidenav from '../components/Navigations/Sidenav'

// styles
import { StyledMainLayoutContainer, StyledMainLayout } from './styles/StyledMainLayout'

const MainLayout = ({ children }) => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <StyledMainLayout>
      <Sidenav />
      <StyledMainLayoutContainer>{children}</StyledMainLayoutContainer>
    </StyledMainLayout>
  )
}

export default MainLayout
