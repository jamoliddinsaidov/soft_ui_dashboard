import React from 'react'

// styles
import { StyledBillingInfoCard, StyledBillingInfo, StyledBillingActions } from './styles/StyledBillingInfoCard'

const BillingInfoCard = ({ info: { name, iconDelete, iconEdit, companyName, emailAddress, vatNum } }) => {
  return (
    <StyledBillingInfoCard>
      <StyledBillingActions>
        <p className='info_name'>{name}</p>
        <div>
          <p className='info_delete'>{iconDelete} DELETE</p>
          <p className='info_edit'>{iconEdit} EDIT</p>
        </div>
      </StyledBillingActions>

      <StyledBillingInfo>
        <p>
          Company Name: <span>{companyName}</span>
        </p>
        <p>
          Email Address: <span>{emailAddress}</span>
        </p>
        <p>
          VAT Number: <span>{vatNum}</span>
        </p>
      </StyledBillingInfo>
    </StyledBillingInfoCard>
  )
}

export default BillingInfoCard
