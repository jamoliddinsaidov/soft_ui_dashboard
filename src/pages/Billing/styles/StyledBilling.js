import styled from 'styled-components'
import { colors, FlexBetween } from '../../../GlobalStyles'

export const StyledPaymentsContainer = styled(FlexBetween)``

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
