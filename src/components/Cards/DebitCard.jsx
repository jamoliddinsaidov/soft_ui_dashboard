import React from 'react'

// styles
import { StyledDebitCard, StyledCredentials } from './styles/StyledDebitCard'

const DebitCard = ({ card: { icon, backgroundImg, cardNum, cardHolder, expireDate, cardType } }) => {
  return (
    <StyledDebitCard bgImg={backgroundImg}>
      <div className='card_icon'>{icon}</div>

      <p className='card_num'>{cardNum}</p>

      <StyledCredentials>
        <table>
          <thead>
            <tr>
              <th>Card Holder</th>
              <th>Expires</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{cardHolder}</td>
              <td>{expireDate}</td>
            </tr>
          </tbody>
        </table>

        <div>
          <img src={cardType} alt={cardHolder} />
        </div>
      </StyledCredentials>
    </StyledDebitCard>
  )
}

export default DebitCard
