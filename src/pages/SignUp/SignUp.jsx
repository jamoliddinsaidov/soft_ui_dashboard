import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

// components
import SignUpTopHeader from '../../components/Headers/SignUpTopHeader'
import Button from '../../components/Buttons/SidenavButton'
import ToggleSwitchText from '../../components/FormElements/ToggleSwitch&Text'
import SignUpFooter from '../../components/Footers/SignInFooter'

// styles
import { StyledSignUp, SignupFormContainer, StyledSignupIcons, FooterContainer } from './styles/StyledSignUp'
import { colors } from '../../GlobalStyles'

const SignUp = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <StyledSignUp>
      <SignUpTopHeader />
      <SignupFormContainer>
        <p className='register_text'>Register with</p>

        <StyledSignupIcons>
          <div>
            <BsFacebook />
          </div>
          <div>
            <BsApple />
          </div>
          <div>
            <FcGoogle />
          </div>
        </StyledSignupIcons>

        <div className='or_text'></div>

        <form>
          <input type='text' placeholder='Name' className='form-input' required autoComplete='off' />
          <input type='email' placeholder='Email' className='form-input' required autoComplete='off' />
          <input type='password' placeholder='Password' className='form-input password' required />

          <ToggleSwitchText
            isChecked={false}
            text={'I agree the Terms and Conditions'}
            width='48'
            textColor={colors.iconColor}
          />

          <Button title='Sign Up' bgColor={colors.blackGradient} color='#fff' width='100%' />
        </form>
        <p className='sign_in_action'>
          Already have an account? <Link to='/signin'>Sign in</Link>
        </p>
      </SignupFormContainer>
      <FooterContainer>
        <SignUpFooter />
      </FooterContainer>
    </StyledSignUp>
  )
}

export default SignUp
