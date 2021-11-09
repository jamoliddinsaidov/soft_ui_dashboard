import styled from 'styled-components'
import { FlexBetween } from '../../../GlobalStyles'

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
`
