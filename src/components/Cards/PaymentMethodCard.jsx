import React from 'react'
import SidenavButton from '../Buttons/SidenavButton'

// styles
import { colors } from '../../GlobalStyles'
import { StyledPaymentMethodCard, StyledCardNumberView } from './styles/StyledPaymentMethodCard'

const PaymentMethodCard = ({ paymentMethods }) => {
  return (
    <StyledPaymentMethodCard>
      <div className='payment_methods'>
        <h3>Payment Method</h3>
        <SidenavButton bgColor={colors.blackGradient} color={'#fff'} title='+ Add new card' />
      </div>

      <div className='payment_methods'>
        {paymentMethods.map((payment, index) => (
          <StyledCardNumberView key={payment.cardNumber + index}>
            <div>
              <img src={payment.img} alt='card icon' />
              <p>{payment.cardNumber}</p>
            </div>
            {payment.icon}
          </StyledCardNumberView>
        ))}
      </div>
    </StyledPaymentMethodCard>
  )
}

export default PaymentMethodCard
