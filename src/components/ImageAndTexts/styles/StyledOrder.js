import styled from 'styled-components'
import { colors } from '../../../GlobalStyles'

export const StyledOrder = styled.div`
  width: 100%;
  margin-bottom: 1.85em;
  display: flex;
  align-items: center;

  svg {
    color: ${({ iconColor }) => iconColor};
    font-size: 1.5rem;
    position: relative;
  }

  div {
    margin-left: 1.5em;

    h5 {
      font-weight: 500;
      font-size: 1rem;
    }

    p {
      margin-top: 0.5em;
      color: ${colors.textColor};
      font-size: 0.85rem;
      font-weight: 600;
    }
  }
`
