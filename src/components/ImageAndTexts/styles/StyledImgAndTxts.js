import styled from 'styled-components'
import { colors, Flex } from '../../../GlobalStyles'

export const StyledImageAndTexts = styled(Flex)`
  margin-bottom: 1.5em;
  padding-bottom: 1.5em;
  border-bottom: 2px solid ${colors.backgroundColor};

  img {
    width: 17%;
  }

  p {
    margin-left: 0.5em;
    font-weight: 600;
    color: ${colors.textColor};
  }
`
