import React from 'react'

// components
import Button from '../Buttons/SidenavButton'

// styles
import { StyledNavLink, StyledLinksContainer } from './styles/StyledTopNav'

// contents
import { TopNavContents } from '../../assets/contents/Navigations/TopnavContent'

const TopNav = ({ btnWidth, btnBgColor }) => {
  return (
    <>
      <h4>Soft UI Dashboard</h4>

      <StyledLinksContainer>
        {TopNavContents.map((nav) => (
          <StyledNavLink to={nav.link} key={nav.title}>
            <p className='icon'>{nav.icon}</p>
            <p className='text'>{nav.title}</p>
          </StyledNavLink>
        ))}
      </StyledLinksContainer>

      <Button title='free download' bgColor={btnBgColor} color='#fff' width={btnWidth} />
    </>
  )
}

export default TopNav
