import React from 'react'

// components
import TopNav from '../Navigations/TopNav'

// styles
import { StyledSignUpHeaderContainer, StyledSignUpHeader } from './styles/StyledSignUpHeader'

import { colors } from '../../GlobalStyles'

const SignUpTopHeader = () => {
  return (
    <StyledSignUpHeaderContainer>
      <StyledSignUpHeader>
        <TopNav btnWidth='12%' btnBgColor={colors.blueGradient} />
      </StyledSignUpHeader>

      <div className='welcome_text'>
        <h2>Welcome!</h2>
        <p>Use these awesome forms to login or create new account in your project for free.</p>
      </div>
    </StyledSignUpHeaderContainer>
  )
}

export default SignUpTopHeader
