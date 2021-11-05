import styled from 'styled-components'
import { colors, FlexColumn } from '../../../GlobalStyles'

export const StyledOrdersCard = styled(FlexColumn)`
  background: #fff;
  padding: 1.5em;
  border-radius: 1em;
  color: ${colors.iconColor};
  box-shadow: 3px 2px 7px -12px rgba(0, 0, 0, 1);
`

export const StyledOrdersTitle = styled.div`
  margin-bottom: 1.5em;

  h3 {
    font-weight: 500;
    margin-bottom: 0.5em;
  }

  svg {
    color: ${colors.lightGreen};
  }

  span {
    font-weight: bold;
  }
`
export const StyledOrdersList = styled(FlexColumn)``
