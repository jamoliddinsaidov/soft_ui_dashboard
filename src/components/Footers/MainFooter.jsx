import React from 'react'

// styles
import { StyledMainFooter, SyledFooterLinks } from './styles/StyledMainFooter'

// utils
import { MdFavorite } from 'react-icons/md'

const MainFooter = () => {
  return (
    <StyledMainFooter>
      <p>
        Made with <MdFavorite /> by
        <a href='https://github.com/jamoliddinsaidov/soft_ui_dashboard' target='_blank' rel='noreferrer'>
          Jamoliddin
        </a>
        for a better web.
      </p>

      <SyledFooterLinks>
        <li>
          <a href='https://github.com/jamoliddinsaidov/soft_ui_dashboard' target='_blank' rel='noreferrer'>
            GitHub
          </a>
        </li>
        <li>About Us</li>
        <li>Blog</li>
        <li>License</li>
      </SyledFooterLinks>
    </StyledMainFooter>
  )
}

export default MainFooter
