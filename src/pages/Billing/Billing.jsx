import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import TopHeader from '../../components/Headers/TopHeader'

// styles
import { StyledPaymentsContainer } from './styles/StyledBilling'

// utils
import { DebitCardContent } from '../../assets/contents/Billings/DebitCardContent'

const Billing = () => {
  return (
    <MainLayout>
      <TopHeader page='Billing' />

      <StyledPaymentsContainer></StyledPaymentsContainer>
    </MainLayout>
  )
}

export default Billing
