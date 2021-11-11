import styled from 'styled-components'
import { FlexBetween, colors } from '../../../GlobalStyles'

export const StyledTransactionCard = styled(FlexBetween)`
  margin-bottom: 1.5em;

  svg,
  .transaction_budget {
    color: ${({ budget }) =>
      budget.includes('+') ? colors.successColor : budget.includes('Pending') ? colors.iconColor : colors.errorColor};
  }

  .transaction_budget {
    font-weight: 600;
  }
`

export const StyledTransactionInfo = styled(FlexBetween)`
  button {
    position: relative;
    text-align: center;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.25em;
    font-size: 0.9rem;
    margin-right: 1em;
    background: #fff;
    border: 1px solid transparent;
    border-color: ${({ budget }) =>
      budget.includes('+') ? colors.successColor : budget.includes('Pending') ? colors.iconColor : colors.errorColor};
    border-radius: 50%;
  }

  svg {
    position: absolute;
    top: 20%;
    left: 20%;
  }

  h4 {
    color: ${colors.iconColor};
    font-weight: 500;
    margin-bottom: 0.5em;
  }

  p {
    color: ${colors.textColor};
    font-size: 0.8rem;
  }
`
