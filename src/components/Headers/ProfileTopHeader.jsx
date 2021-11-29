import React from 'react'

// components
import TopHeader from './TopHeader'

// styles
import { StyledProfileHeaderContainer, StyledProfileTopHeader } from './styles/ProfileTopHeader'

const ProfileTopHeader = ({ page }) => {
  return (
    <StyledProfileHeaderContainer>
      <StyledProfileTopHeader>
        <TopHeader page={page} />
      </StyledProfileTopHeader>
    </StyledProfileHeaderContainer>
  )
}

export default ProfileTopHeader
