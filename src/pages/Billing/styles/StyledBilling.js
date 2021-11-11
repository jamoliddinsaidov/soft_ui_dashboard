import styled from 'styled-components'
import { colors, FlexBetween } from '../../../GlobalStyles'

export const StyledPaymentsContainer = styled(FlexBetween)`
  margin-bottom: 1em;
`

export const StyledPayments = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  .budget_cards {
    display: flex;
  }
`

export const StyledInvoices = styled.div`
  flex: 1;
  background: #fff;
  padding: 1em;
  margin-left: 1em;
  border-radius: 1em;
  box-shadow: 3px 2px 7px -7px rgba(0, 0, 0, 1);

  .invoice_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;

    h4 {
      color: ${colors.iconColor};
      font-weight: 500;
    }

    button {
      width: 31%;
      padding: 0.6em 1.2em;
    }
  }
`
export const StyledBillingInformationContainer = styled(FlexBetween)``

export const StyledBillingInformation = styled.div`
  flex: 1.8;
  background: #fff;
  border-radius: 1em;
  padding: 1em;

  h4 {
    color: ${colors.iconColor};
    font-weight: 500;
    margin-bottom: 1.5em;
  }
`

export const StyledTransactions = styled.div`
  align-self: flex-start;
  flex: 1.2;
  margin-left: 1em;
  background: #fff;
  padding: 1.5em;
  border-radius: 1em;

  .transaction_day {
    margin-bottom: 1.5em;
    color: ${colors.textColor};
    text-transform: uppercase;
    font-size: 0.8rem;
  }
`

export const StyledTransactionsTitle = styled(FlexBetween)`
  margin-bottom: 2em;

  h4 {
    color: ${colors.iconColor};
    font-weight: 600;
  }

  svg {
    margin-right: 0.5em;
    font-size: 1.2rem;
    display: block;
    align-self: center;
  }

  p {
    color: ${colors.textColor};
    display: flex;
    font-weight: 400;
    font-size: 0.9rem;
  }
`
