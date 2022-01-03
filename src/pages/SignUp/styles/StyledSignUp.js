import styled from 'styled-components'
import { FormContainer } from '../../SignIn/styles/StyledSignIn'
import { colors, FlexBetween } from '../../../GlobalStyles'

export const StyledSignUp = styled.div`
  position: relative;
`

export const SignupFormContainer = styled(FormContainer)`
  background: #fff;
  box-shadow: 0px 3px 12px -7px ${colors.textColor};
  width: 25%;
  min-height: 50vh;
  z-index: 5;
  align-items: center;
  border-radius: 1rem;
  padding: 1.5rem 0;
  position: absolute;
  top: 26%;
  left: 36.5%;

  .register_text {
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.2rem;
    color: ${colors.iconColor};
  }

  form {
    width: 80%;
  }

  .form-input {
    width: 100%;
    margin-bottom: 1rem;
  }

  label {
    font-weight: 400;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      margin-left: 0.2rem;
    }

    input {
      margin-right: 1rem;
      width: 1rem;
      height: 1rem;
    }
  }

  .sign_in_action {
    color: #a0a0a0;
    margin-top: 1rem;
  }

  label a,
  .sign_in_action a {
    background: ${colors.blackGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  button {
    margin: 0.5rem 0 1rem;
  }

  .or_text {
    width: 80%;
    height: 2px;
    margin: 0 auto 2rem;
    background: #eee;
    position: relative;

    &:after {
      content: 'or';
      color: #a0a0a0;
      font-weight: 500;
      background: #fff;
      width: 15%;
      position: absolute;
      top: -13px;
      text-align: center;
      left: 42.5%;
    }
  }
`
export const StyledSignupIcons = styled(FlexBetween)`
  margin: 1rem 0 2rem;
  width: 60%;

  div {
    border: 1px solid #e6e6e6;
    border-radius: 0.5rem;
    padding: 0.7rem 1.4rem;
    transition: all 400ms ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
      opacity: 0.7;
    }
  }

  svg {
    font-size: 1.3rem;
  }
`
export const FooterContainer = styled.div`
  margin-top: 25rem;
  a,
  svg {
    color: rgb(131, 146, 171) !important;
    transition: color 400ms ease !important;

    &:hover {
      color: ${colors.iconColor} !important;
    }
  }
`
