import React from 'react'

// styles
import { StyledButton } from './styles/StyledSidenavButton'

const SidenavButton = ({ title, bgColor, color, width }) => {
  return (
    <StyledButton bgColor={bgColor} color={color} width={width}>
      {title}
    </StyledButton>
  )
}

export default SidenavButton
