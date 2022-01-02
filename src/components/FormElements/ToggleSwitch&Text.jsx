import React, { useState } from 'react'

// styles
import { StyledSwitchTextContainer, StyledSwitchContainer } from './styles/StyledToggleSwitch&Text'

const ToggleSwitchText = ({ isChecked, text, width, textColor }) => {
  const [isSwitchChecked, setIsSwitchChecked] = useState(isChecked)

  const handleCheckboxClick = () => {
    setIsSwitchChecked(!isSwitchChecked)
  }

  return (
    <StyledSwitchTextContainer textColor={textColor}>
      <StyledSwitchContainer width={width}>
        <input type='checkbox' checked={isSwitchChecked} onChange={handleCheckboxClick} />
        <span className='slider round'></span>
      </StyledSwitchContainer>
      <p>{text}</p>
    </StyledSwitchTextContainer>
  )
}

export default ToggleSwitchText
