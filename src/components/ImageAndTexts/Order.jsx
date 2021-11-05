import React from 'react'

// styles
import { StyledOrder } from './styles/StyledOrder'

const Order = ({ icon, iconColor, title, subtitle }) => {
  return (
    <StyledOrder iconColor={iconColor}>
      {icon}
      <div>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </StyledOrder>
  )
}

export default Order
