import styled from 'styled-components'
import { colors } from '../../../GlobalStyles'
import img from '../../../assets/images/curved-images/curved-6.jpg'

export const StyledSignIn = styled.div`
  margin: -2rem -1rem;
  padding: 1.5rem 1rem;
  background: #fff;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  z-index: 1;

  .background_img {
    position: absolute;
    top: 0;
    right: -70px;
    width: 45%;
    height: 80%;
    transform: skewX(-10deg);
    border-radius: 1rem;
    background: url(${img}) 100% 100% / cover;
    z-index: -1;
  }
`
export const FormContainer = styled.div`
  width: 60%;
  min-height: 70vh;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1,
  .sign_up_action a {
    background: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 82, 255), rgb(33, 82, 255), rgb(33, 212, 253));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .welcome_p {
    color: ${colors.textColor};
    margin: 1rem 0 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  label {
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .form-input {
    background: #fff;
    border: 1px solid #e0e0e0;
    font-size: 0.9rem;
    transition: all 400ms ease;
    padding: 0.8em 1.4em;
    margin-bottom: 2rem;
    width: 40%;
    border-radius: 0.6rem;
    outline: none;

    &:active,
    &:focus {
      border: 2px solid ${colors.lightBlue};
    }
  }

  .password {
    margin-bottom: 0.5rem;
  }

  button {
    margin-top: 1rem;
    box-shadow: 0px 2px 12px -8px rgba(0, 0, 0, 1);
  }

  .sign_up_action {
    margin: 1rem 3.5rem;
    font-weight: 500;
    color: ${colors.textColor};
  }
`
