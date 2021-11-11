import React from 'react'

// styles
import { StyledTransactionCard, StyledTransactionInfo } from './styles/StyledTransactionCard'

const TransactionCard = ({ transaction: { icon, title, trDate, budget } }) => {
  return (
    <StyledTransactionCard budget={budget}>
      <StyledTransactionInfo budget={budget}>
        <button>{icon}</button>
        <div>
          <h4>{title}</h4>
          <p>{trDate}</p>
        </div>
      </StyledTransactionInfo>
      <p className='transaction_budget'>{budget}</p>
    </StyledTransactionCard>
  )
}

export default TransactionCard
