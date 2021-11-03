import React from 'react'

// components
import ImageAndTexts from '../ImageAndTexts/ImageAndTexts'
import SidebarLink from './SidebarLink'

// styles
import { StyledImageAndTexts, StyledSidebar } from './styles/StyledSidebar'

// utils
import { SidebarMainContents, SidebarAccountContents } from '../../assets/contents/Navigations/SidebarContents'
import logoImage from '../../assets/images/logo-ct.png'

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledImageAndTexts>
        <ImageAndTexts image={logoImage} title='Soft UI Dashboard' />
      </StyledImageAndTexts>

      <SidebarLink contents={SidebarMainContents} />
      <p className='account_pages_title'>Account Pages</p>
      <SidebarLink contents={SidebarAccountContents} />
    </StyledSidebar>
  )
}

export default Sidebar
