import React from 'react'

// styles
import { StyledIconAndText } from './styles/StyledIconAndText'

const IconAndText = ({ icon, text }) => {
  return (
    <StyledIconAndText>
      {icon}
      <p>{text}</p>
    </StyledIconAndText>
  )
}

export default IconAndText
