import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import TopHeader from '../../components/Headers/TopHeader'
import DebitCard from '../../components/Cards/DebitCard'
import BudgetCard from '../../components/Cards/BudgetCard'

// styles
import { StyledPaymentsContainer, StyledPayments, StyledInvoices } from './styles/StyledBilling'

// utils
import { DebitCardContent } from '../../assets/contents/Billings/DebitCardContent'
import { BudgetCardContent } from '../../assets/contents/Billings/BudgetCardContent'

const Billing = () => {
  return (
    <MainLayout>
      <TopHeader page='Billing' />

      <StyledPaymentsContainer>
        <StyledPayments>
          <DebitCard card={DebitCardContent} />
          {BudgetCardContent.map((budget, index) => (
            <BudgetCard budget={budget} key={budget.title + index} />
          ))}
        </StyledPayments>

        <StyledInvoices>
          <p>invoices</p>
        </StyledInvoices>
      </StyledPaymentsContainer>
    </MainLayout>
  )
}

export default Billing
