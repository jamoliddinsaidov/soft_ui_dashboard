import styled from 'styled-components'
import { colors, Flex } from '../../../GlobalStyles'

export const StyledAuthorsCard = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 1em;
  padding: 1em;
  box-shadow: 3px 2px 7px -12px rgba(0, 0, 0, 1);

  h4 {
    color: ${colors.textColor};
    font-weight: 500;
  }
`
