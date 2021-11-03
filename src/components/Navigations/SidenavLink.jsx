import React from 'react'

// styles
import { StyledSidenavLink, StyledSidenavLinkButton } from './styles/StyledSidenavLink'

const SidenavLink = ({ contents }) => {
  return (
    <div>
      {contents.map((content) => (
        <StyledSidenavLink to={content.link} key={content.title + 'qwerty'}>
          <StyledSidenavLinkButton>{content.icon}</StyledSidenavLinkButton>
          <p>{content.title}</p>
        </StyledSidenavLink>
      ))}
    </div>
  )
}

export default SidenavLink
