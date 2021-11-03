import React from 'react'

// components
import ImageAndTexts from '../ImageAndTexts/ImageAndTexts'
import SidenavLink from './SidenavLink'
import SidenavCard from './SidenavCard'
import SidenavButton from '../Buttons/SidenavButton'

// styles
import { StyledSidenav } from './styles/StyledSidenav'
import { colors } from '../../GlobalStyles'

// utils
import { SidebarMainContents, SidebarAccountContents } from '../../assets/contents/Navigations/SidebarContents'
import logoImage from '../../assets/images/logo-ct.png'

const Sidebar = () => {
  return (
    <StyledSidenav>
      <ImageAndTexts image={logoImage} title='Soft UI Dashboard' />

      <SidenavLink contents={SidebarMainContents} />
      <p className='account_pages_title'>Account Pages</p>
      <SidenavLink contents={SidebarAccountContents} />

      <SidenavCard />
      <SidenavButton title='Upgrade to pro' bgColor={colors.blueGradient} color='#fff' width='110%' />
    </StyledSidenav>
  )
}

export default Sidebar
