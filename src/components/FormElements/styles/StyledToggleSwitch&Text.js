import styled from 'styled-components'
import { colors, Flex } from '../../../GlobalStyles'

export const StyledSwitchTextContainer = styled(Flex)`
  width: 100%;

  p {
    margin-left: 0.8rem;
    color: ${({ textColor }) => (textColor ? textColor : `${colors.textColor}`)};
    width: 90%;
  }

  margin-bottom: 1em;
`

export const StyledSwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: ${({ width }) => (width ? `${width}px` : '48px')};
  height: 22px;
  cursor: pointer;
  margin-top: ${({ width }) => (width ? '0.5rem' : '0')};

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
    display: block;

    &::before {
      content: '';
      position: absolute;
      height: 18px;
      width: 18px;
      left: 2.5px;
      bottom: 2.2px;
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

  input:checked + .slider::before {
    transform: translateX(20px);
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
  }
`
