import styled from 'styled-components'
import { colors, Flex, FlexBetween } from '../../../GlobalStyles'

export const StyledInvoice = styled(FlexBetween)`
  margin-bottom: 1.05em;

  p {
    color: ${colors.textColor};
  }
`

export const StyledInvoiceTitle = styled.div`
  h4 {
    color: ${colors.iconColor};
    font-weight: 500;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 0.9rem;
  }
`

export const StyledInvoiceBudget = styled(Flex)`
  p {
    margin-right: 2em;
  }

  div {
    font-weight: bold;
    color: ${colors.iconColor};
  }
`
