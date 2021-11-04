import styled from 'styled-components'
import { colors, FlexBetween } from '../../../GlobalStyles'

export const StyledProjectsCard = styled.div`
  background: #fff;
  border-radius: 1em;
  padding: 1em;
`

export const StyledPCHeader = styled(FlexBetween)`
  h3 {
    color: ${colors.iconColor};
    font-weight: 500;
    margin-bottom: 0.5em;
  }

  p {
    color: ${colors.textColor};
  }

  svg {
    fill: ${colors.successColor};
  }

  span {
    font-weight: bold;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;

    svg {
      font-size: 1.3rem;
      fill: ${colors.iconColor};
    }
  }
`
