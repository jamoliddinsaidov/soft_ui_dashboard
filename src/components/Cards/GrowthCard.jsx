import React from 'react'

// styles
import { StyledGrowthCard, StyledGrowthCardContent, StyledIcon } from './styles/StyledGrowthCard'

const GrowthCard = ({ title, data, percent, icon }) => {
  return (
    <StyledGrowthCard>
      <StyledGrowthCardContent percentColor={percent.includes('+')}>
        <h4>{title}</h4>

        <div>
          <h3>{data}</h3>
          <p>{percent}</p>
        </div>
      </StyledGrowthCardContent>

      <StyledIcon>{icon}</StyledIcon>
    </StyledGrowthCard>
  )
}

export default GrowthCard
