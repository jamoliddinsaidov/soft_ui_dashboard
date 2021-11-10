import React from 'react'

// styles
import { StyledButton } from './styles/StyledSidenavButton'

const SidenavButton = ({ title, bgColor, color, borderColor, width }) => {
  return (
    <StyledButton bgColor={bgColor} color={color} width={width} borderColor={borderColor}>
      {title}
    </StyledButton>
  )
}

export default SidenavButton
