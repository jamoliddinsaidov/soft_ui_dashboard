import React from 'react'

// components
import ImageAndTexts from '../ImageAndTexts/ImageAndTexts'

// styles
import { StyledImageAndTexts, StyledSidebar, StyledSidebarLink } from './styles/StyledSidebar'

// utils
import { SidebarMainContents, SidebarAccountContents } from '../../assets/contents/Navigations/SidebarContents'
import logoImage from '../../assets/images/logo-ct.png'

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledImageAndTexts>
        <ImageAndTexts image={logoImage} title='Soft UI Dashboard' />
      </StyledImageAndTexts>

      {SidebarMainContents.map((content) => (
        <StyledSidebarLink to={content.link} key={content.title + 'qwerty'}>
          <button>{content.icon}</button>
          <p>{content.title}</p>
        </StyledSidebarLink>
      ))}

      <p className='account_pages_title'>Account Pages</p>

      {SidebarAccountContents.map((content) => (
        <StyledSidebarLink to={content.link} key={content.title + 'qwerty'}>
          <button>{content.icon}</button>
          <p>{content.title}</p>
        </StyledSidebarLink>
      ))}
    </StyledSidebar>
  )
}

export default Sidebar
