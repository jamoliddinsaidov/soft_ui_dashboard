import styled from 'styled-components'
import { colors, FlexBetween } from '../../../GlobalStyles'

export const StyledBillingInfoCard = styled.div`
  background: ${colors.lightGrey};
  padding: 1.5em;
  border-radius: 1em;
  margin-bottom: 1em;
`

export const StyledBillingActions = styled(FlexBetween)`
  margin-bottom: 1em;

  p {
    font-weight: 600;
  }

  .info_name {
    color: ${colors.iconColor};
  }

  div {
    display: flex;

    .info_delete,
    .info_edit {
      cursor: pointer;
      font-size: 0.9rem;
    }

    .info_delete {
      color: ${colors.errorColor};
      margin-right: 1.2em;
    }

    .info_edit {
      color: ${colors.iconColor};
    }
  }
`

export const StyledBillingInfo = styled.div`
  p {
    font-size: 0.8rem;
    color: ${colors.textColor};
    margin-bottom: 0.5em;
  }

  span {
    font-weight: 600;
    color: ${colors.iconColor};
  }
`
