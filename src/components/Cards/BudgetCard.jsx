import React from 'react'

// styles
import { StyledBudgetCard } from './styles/StyledBudgetCard'
import { StyledIcon } from './styles/StyledGrowthCard'

const BudgetCard = ({ budget: { icon, title, text, budget } }) => {
  return (
    <StyledBudgetCard>
      <StyledIcon>{icon}</StyledIcon>
      <h4>{title}</h4>
      <p>{text}</p>
      <h3>{budget}</h3>
    </StyledBudgetCard>
  )
}

export default BudgetCard
