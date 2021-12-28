import styled from 'styled-components'
import { colors, Flex } from '../../../GlobalStyles'

export const StyledSwitchTextContainer = styled(Flex)`
  p {
    margin-left: 1em;
    color: ${colors.textColor};
    width: 90%;
  }

  margin-bottom: 1em;
`

export const StyledSwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 23px;

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  .slider {
    position: absolute;
    inset: 0;
    background-color: #e4e0e0;
    -webkit-transition: 400ms;
    transition: 400ms;

    &::before {
      content: '';
      position: absolute;
      height: 18px;
      width: 18px;
      left: 2.5px;
      bottom: 2.5px;
      background-color: #fff;
      -webkit-transition: 400ms;
      transition: 400ms;
    }

    &.round {
      border-radius: 1rem;
    }

    &.round:before {
      border-radius: 50%;
    }
  }

  input:checked + .slider {
    background: ${colors.blackGradient};
  }

  input:focus + .slider {
    /* box-shadow: 0 0 1px #2196f3; */
  }

  input:checked + .slider::before {
    transform: translateX(20px);
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
  }
`
