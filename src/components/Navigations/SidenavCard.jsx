import React from 'react'

// components
import SidenavButton from '../Buttons/SidenavButton'

// styles
import { StyledSidenavCard } from './styles/StyledSidenavCard'
import { StyledSidenavLinkButton } from './styles/StyledSidenavLink'

// utils
import { MdStar } from 'react-icons/md'

const SidenavCard = () => {
  return (
    <StyledSidenavCard>
      <StyledSidenavLinkButton bgColor='#fff' color='#2b92ff'>
        <MdStar />
      </StyledSidenavLinkButton>

      <h3>Need help?</h3>
      <p>Please check our docs</p>
      <SidenavButton title={'Documentation'} />
    </StyledSidenavCard>
  )
}

export default SidenavCard
