import React from 'react'
import SidenavButton from '../Buttons/SidenavButton'

// styles
import { colors } from '../../GlobalStyles'
import { StyledPaymentMethodCard, StyledCardNumberView } from './styles/StyledPaymentMethodCard'

const renderStuff = (card) => {
  return (
    <StyledCardNumberView>
      <div>
        <img src={card.img} alt='card icon' />
        <p>{card.cardNumber}</p>
      </div>
      {card.icon}
    </StyledCardNumberView>
  )
}

const PaymentMethodCard = ({ paymentMethods }) => {
  return (
    <StyledPaymentMethodCard>
      <div className='payment_methods'>
        <h3>Payment Method</h3>
        <SidenavButton bgColor={colors.blackGradient} color={'#fff'} title='+ Add new card' />
      </div>
      <div className='payment_methods'>{paymentMethods.map((payment) => renderStuff(payment))}</div>
    </StyledPaymentMethodCard>
  )
}

export default PaymentMethodCard
