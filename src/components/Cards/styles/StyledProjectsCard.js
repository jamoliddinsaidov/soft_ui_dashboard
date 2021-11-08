import styled from 'styled-components'
import { colors, FlexBetween } from '../../../GlobalStyles'

export const StyledPCHeader = styled(FlexBetween)`
  margin-bottom: 2em;

  h3 {
    color: ${colors.iconColor};
    font-weight: 500;
    margin-bottom: 0.5em;
  }

  p {
    color: ${colors.textColor};
  }

  svg {
    fill: ${colors.successColor};
  }

  span {
    font-weight: bold;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;

    svg {
      font-size: 1.3rem;
      fill: ${colors.iconColor};
    }
  }
`

export const StyledCompletitionColumn = styled.td`
  div {
    background: ${colors.backgroundColor};
    width: ${({ isCompany }) => (isCompany ? '100%' : '80%')};
    height: 0.4rem;
    border-radius: 1em;
    position: relative;
    margin: ${({ isCompany }) => (isCompany ? '0' : '0 auto')};

    &:before {
      content: '${({ amount }) => `${amount}%`}';
      position: absolute;
      bottom: 100%;
      left: 0;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: ${({ amount }) => `${amount}%`};
      height: 100%;
      border-radius: 1em;
      background-image: ${({ amount, isCompany }) =>
        amount >= 90 ? colors.greenGradient : amount >= 50 || isCompany ? colors.blueGradient : colors.redGradient};
    }
  }
`

export const StyledPCTableMembers = styled.td`
  width: 15%;
  margin: 0 auto;

  img {
    width: 25%;
    border: 2px solid #fff;
    border-radius: 50%;
    margin-left: -10%;
  }
`
