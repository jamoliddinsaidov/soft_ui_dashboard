import styled from 'styled-components'
import { FlexBetween, colors } from '../../../GlobalStyles'

export const StyledGrowthCard = styled(FlexBetween)`
  width: 23%;
  background: #fff;
  padding: 1em;
  border-radius: 1em;
  box-shadow: 3px 2px 7px -15px rgba(0, 0, 0, 1);
`
export const StyledGrowthCardContent = styled.div`
  h4 {
    color: ${colors.textColor};
    margin-bottom: 0.3em;
  }

  h3 {
    color: ${colors.iconColor};
    font-size: 1.3rem;
  }

  p {
    margin-left: 0.5em;
    color: ${({ percentColor }) => (percentColor ? colors.successColor : colors.errorColor)};
    font-weight: bold;
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const StyledIcon = styled.div`
  background: ${colors.blueGradient};
  padding: 0.6em 0.8em;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 0.5em;
`
