import styled from 'styled-components'
import { StyledProfileHeaderContainer, StyledProfileTopHeader } from './ProfileTopHeader'
import bgImg from '../../../assets/images/curved-images/curved14.jpg'
import { colors } from '../../../GlobalStyles'

export const StyledSignUpHeaderContainer = styled(StyledProfileHeaderContainer)`
  min-height: 50vh;
  margin: 0.5rem auto;
  background: ${colors.blackGradient};
  background-size: cover;
  min-height: 65vh;
  box-shadow: 0px 2px 5px -7px rgba(0, 0, 0, 1);
  border-radius: 1em;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 1rem 3rem;

  &:before {
    content: ' ';
    z-index: -1;
    display: block;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }

  .welcome_text {
    color: #fff;
    text-align: center;

    h2 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.1rem;
      margin: 1rem auto;
      width: 35%;
    }
  }
`

export const StyledSignUpHeader = styled(StyledProfileTopHeader)``
