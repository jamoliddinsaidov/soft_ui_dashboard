import React from 'react'

// styles
import { StyledInvoice, StyledInvoiceTitle, StyledInvoiceBudget } from './styles/StyledInvoice'

const Invoice = ({ invoice: { date, id, budget, action } }) => {
  return (
    <StyledInvoice>
      <StyledInvoiceTitle>
        <h4>{date}</h4>
        <p>{id}</p>
      </StyledInvoiceTitle>

      <StyledInvoiceBudget>
        <p>{budget}</p>
        {action}
      </StyledInvoiceBudget>
    </StyledInvoice>
  )
}

export default Invoice
