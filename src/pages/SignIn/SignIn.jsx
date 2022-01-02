import React from 'react'
import { Link } from 'react-router-dom'

// components
import Layout from '../../layouts/TopNavigationLayout'
import ToggleSwitchText from '../../components/FormElements/ToggleSwitch&Text'
import Button from '../../components/Buttons/SidenavButton'
import SignInFooter from '../../components/Footers/SignInFooter'

// styles
import { StyledSignIn, FormContainer } from './styles/StyledSignIn'
import { colors } from '../../GlobalStyles'

const SignIn = () => {
  return (
    <StyledSignIn>
      <Layout>
        <FormContainer>
          <h1>Welcome Back</h1>
          <p className='welcome_p'>Enter your email and password to sign in</p>

          <form>
            <label>Email</label>
            <input type='email' placeholder='Email' className='form-input' required autoComplete='off' />

            <label>Password</label>
            <input type='password' placeholder='Password' className='form-input password' required />

            <ToggleSwitchText isChecked={true} text={'Remember me'} width='43' textColor={colors.iconColor} />
            <Button title='Sign In' bgColor={colors.blueGradient} color='#fff' width='40%' />
          </form>
          <p className='sign_up_action'>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </p>
        </FormContainer>
      </Layout>

      <div className='background_img'></div>
      <SignInFooter />
    </StyledSignIn>
  )
}

export default SignIn
