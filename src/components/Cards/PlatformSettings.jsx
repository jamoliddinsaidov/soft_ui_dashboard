import React from 'react'

// styles
import { StyledPlatformSettings } from './styles/StyledPlatformSettings'

// components
import ToggleSwitchText from '../FormElements/ToggleSwitch&Text'

const PlatformSettings = ({ title, content }) => {
  return (
    <StyledPlatformSettings>
      <h4>{title}</h4>
      {content.map(({ isChecked, text }) => (
        <ToggleSwitchText isChecked={isChecked} text={text} />
      ))}
    </StyledPlatformSettings>
  )
}

export default PlatformSettings
