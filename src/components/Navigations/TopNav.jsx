import React from 'react'

// components
import Button from '../Buttons/SidenavButton'

// styles
import { StyledTopNav, StyledNavLink } from './styles/StyledTopNav'
import { colors } from '../../GlobalStyles'

// contents
import { TopNavContents } from '../../assets/contents/Navigations/TopnavContent'

const TopNav = () => {
  return (
    <StyledTopNav>
      <h4>Soft UI Dashboard</h4>

      <div>
        {TopNavContents.map((nav) => (
          <StyledNavLink to={nav.link} key={nav.title}>
            <p className='icon'>{nav.icon}</p>
            <p className='text'>{nav.title}</p>
          </StyledNavLink>
        ))}
      </div>

      <Button title='free download' bgColor={colors.blackGradient} color='#fff' width='15%' />
    </StyledTopNav>
  )
}

export default TopNav
