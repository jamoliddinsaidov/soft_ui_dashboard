import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import TopHeader from '../../components/Headers/TopHeader'
import DebitCard from '../../components/Cards/DebitCard'
import BudgetCard from '../../components/Cards/BudgetCard'
import PaymentMethodCard from '../../components/Cards/PaymentMethodCard'

// styles
import { StyledPaymentsContainer, StyledPayments, StyledInvoices } from './styles/StyledBilling'

// utils
import { DebitCardContent } from '../../assets/contents/Billings/DebitCardContent'
import { BudgetCardContent } from '../../assets/contents/Billings/BudgetCardContent'
import { PaymentCardContent } from '../../assets/contents/Billings/PaymentCardContent'

const Billing = () => {
  return (
    <MainLayout>
      <TopHeader page='Billing' />

      <StyledPaymentsContainer>
        <StyledPayments>
          <div className='budget_cards'>
            <DebitCard card={DebitCardContent} />
            {BudgetCardContent.map((budget, index) => (
              <BudgetCard budget={budget} key={budget.title + index} />
            ))}
          </div>
          <PaymentMethodCard paymentMethods={PaymentCardContent} />
        </StyledPayments>

        <StyledInvoices>
          <p>invoices</p>
        </StyledInvoices>
      </StyledPaymentsContainer>
    </MainLayout>
  )
}

export default Billing
