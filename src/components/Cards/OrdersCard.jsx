import React from 'react'

// components
import Order from '../ImageAndTexts/Order'

// styles
import { StyledOrdersCard, StyledOrdersTitle, StyledOrdersList } from './styles/StyledOrdersCard'

// utils
import { FaArrowUp } from 'react-icons/fa'

// icon, title, subtitle, iconColor

const OrdersCard = ({ content }) => {
  return (
    <StyledOrdersCard>
      <StyledOrdersTitle>
        <h3>Orders overview</h3>
        <p>
          <FaArrowUp /> <span>24%</span> this month
        </p>
      </StyledOrdersTitle>

      <StyledOrdersList>
        {content.map((obj) => (
          <Order
            icon={obj.icon}
            title={obj.title}
            subtitle={obj.subtitle}
            iconColor={obj.iconColor}
            key={obj.title + obj.subtitle}
          />
        ))}
      </StyledOrdersList>
    </StyledOrdersCard>
  )
}

export default OrdersCard
