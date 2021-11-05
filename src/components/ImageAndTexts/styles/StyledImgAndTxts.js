import styled from 'styled-components'
import { colors, Flex } from '../../../GlobalStyles'

export const StyledImageAndTexts = styled(Flex)`
  margin-bottom: ${({ border }) => (border ? '1.5em' : 'none')};
  padding-bottom: ${({ border }) => (border ? '1.5em' : 'none')};
  border-bottom: ${({ border }) => (border ? `2px solid ${colors.backgroundColor}` : 'none')};

  img {
    width: 17%;
  }

  p {
    margin-left: 0.5em;
    font-weight: 600;
    color: ${colors.textColor};
  }
`
