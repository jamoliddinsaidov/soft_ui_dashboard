import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import TopHeader from '../../components/Headers/TopHeader'
import DebitCard from '../../components/Cards/DebitCard'

// styles
import { StyledPaymentsContainer, StyledPayments, StyledInvoices } from './styles/StyledBilling'

// utils
import { DebitCardContent } from '../../assets/contents/Billings/DebitCardContent'

const Billing = () => {
  return (
    <MainLayout>
      <TopHeader page='Billing' />

      <StyledPaymentsContainer>
        <StyledPayments>
          <DebitCard card={DebitCardContent} />
          <div>
            <p>salary</p>
          </div>
          <div>
            <p>paypal</p>
          </div>
        </StyledPayments>

        <StyledInvoices>
          <p>invoices</p>
        </StyledInvoices>
      </StyledPaymentsContainer>
    </MainLayout>
  )
}

export default Billing
