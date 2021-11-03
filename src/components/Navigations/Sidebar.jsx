import React from 'react'
import { Link } from 'react-router-dom'

// utils
import { SidebarContents } from '../../assets/contents/Navigations/SidebarContents'
import { formatLink } from '../../utils/formatLink'

const Sidebar = () => {
  return (
    <nav>
      {SidebarContents.map((content) => (
        <Link to={'/' + formatLink(content.title)}>
          {content.icon}
          <p>{content.title}</p>
        </Link>
      ))}
    </nav>
  )
}

export default Sidebar
