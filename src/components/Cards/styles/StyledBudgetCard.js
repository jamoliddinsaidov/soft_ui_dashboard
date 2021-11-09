import styled from 'styled-components'
import { colors, FlexColumn } from '../../../GlobalStyles'

export const StyledBudgetCard = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 1em;
  margin-left: 2em;
  padding: 1em 2em;
  text-align: center;
  color: ${colors.textColor};
  box-shadow: 3px 2px 7px -9px rgba(0, 0, 0, 1);

  h4 {
    font-size: 1.1rem;
    margin: 1em 0 0.3em;
  }

  h4,
  h3 {
    color: ${colors.iconColor};
    font-weight: 500;
  }

  p {
    font-size: 0.8rem;
    border-bottom: 1px solid ${colors.backgroundColor};
    padding-bottom: 1rem;
  }

  h3 {
    margin-top: 0.5em;
    font-size: 1.3rem;
  }

  div {
    font-size: 1.5rem;
  }
`
