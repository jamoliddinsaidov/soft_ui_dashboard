import React from 'react'

// styles
import { StyledSidebarLink } from './styles/StyledSidebarLink'

const SidebarLink = ({ contents }) => {
  return (
    <div>
      {contents.map((content) => (
        <StyledSidebarLink to={content.link} key={content.title + 'qwerty'}>
          <button>{content.icon}</button>
          <p>{content.title}</p>
        </StyledSidebarLink>
      ))}
    </div>
  )
}

export default SidebarLink
