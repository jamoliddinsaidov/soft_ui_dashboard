import React, { useState } from 'react'

// styles
import { StyledSwitchTextContainer, StyledSwitchContainer } from './styles/StyledToggleSwitch&Text'

const ToggleSwitchText = ({ isChecked, text }) => {
  const [isSwitchChecked, setIsSwitchChecked] = useState(isChecked)

  const handleCheckboxClick = () => {
    setIsSwitchChecked(!isSwitchChecked)
  }

  return (
    <StyledSwitchTextContainer>
      <StyledSwitchContainer>
        <input type='checkbox' checked={isSwitchChecked} onChange={handleCheckboxClick} />
        <span class='slider round'></span>
      </StyledSwitchContainer>
      <p>{text}</p>
    </StyledSwitchTextContainer>
  )
}

export default ToggleSwitchText
