import React, { useEffect, useState } from 'react'

// styles
import { StyledIconAndText } from './styles/StyledIconAndText'

const IconAndText = ({ icon, text, isIconActive, index, handleIconClick }) => {
  const [isActive, setIsActive] = useState(null)

  useEffect(() => {
    setIsActive(isIconActive[index])
  }, [isIconActive, index])

  return (
    <StyledIconAndText className={isActive ? 'icon_bg' : ''} onClick={() => handleIconClick(index)}>
      {icon}
      <p>{text}</p>
    </StyledIconAndText>
  )
}

export default IconAndText
