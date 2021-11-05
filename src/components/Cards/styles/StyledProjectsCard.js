import styled from 'styled-components'
import { colors, FlexBetween } from '../../../GlobalStyles'

export const StyledProjectsCard = styled.div`
  background: #fff;
  border-radius: 1em;
  padding: 2em;
  box-shadow: 3px 2px 7px -12px rgba(0, 0, 0, 1);
  margin-left: 2em;
`

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

export const StylePCTable = styled.table`
  border-collapse: collapse;

  th:first-child,
  th:nth-child(2) {
    text-align: start;
  }

  th,
  td {
    border-bottom: 2px solid ${colors.backgroundColor};
  }

  th {
    padding-bottom: 2em;
    color: ${colors.textColor};
    text-transform: uppercase;
    font-size: 0.75rem;
    opacity: 0.5;
  }

  td:first-child {
    width: 45%;

    img {
      width: 10%;
    }
  }

  td {
    padding: 1em 0;
    color: ${colors.textColor};
  }

  .budget_column {
    font-weight: 500;
    font-size: 0.9rem;
    width: 22%;
    text-align: center;
  }

  .company_column {
    p {
      color: ${colors.iconColor};
    }
  }
`
export const StyledCompletitionColumn = styled.td`
  div {
    background: ${colors.backgroundColor};
    width: 100%;
    height: 0.4rem;
    border-radius: 1em;
    position: relative;

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
      background-image: ${({ amount }) => (amount >= 70 ? colors.greenGradient : colors.blueGradient)};
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
