import React from 'react'
import { Link } from 'react-router-dom'

// utils
import { MdHome, MdSearch, MdAccountCircle, MdSettings, MdNotifications } from 'react-icons/md'

// styles
import { BreadcrumbNav, StyledHeaderSearchBar, TopHeaderContainer } from './styles/TopHeader'

const TopHeader = ({ page }) => {
  return (
    <>
      <BreadcrumbNav>
        <div>
          <Link to='/'>
            <MdHome />
          </Link>
          <p>/</p>
          <span>{page}</span>
        </div>
        <h4>{page}</h4>
      </BreadcrumbNav>

      <TopHeaderContainer>
        <StyledHeaderSearchBar>
          <button>
            <MdSearch />
          </button>
          <input type='text' placeholder='Type here...' />
        </StyledHeaderSearchBar>

        <Link to='signin' className='signin_link'>
          <MdAccountCircle />
        </Link>

        <Link to='#'>
          <MdSettings />
        </Link>
        <Link to='#'>
          <MdNotifications />
        </Link>
      </TopHeaderContainer>
    </>
  )
}

export default TopHeader
