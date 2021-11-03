import styled from 'styled-components'
import { colors, Flex } from '../../../GlobalStyles'

export const StyledSidebar = styled.nav`
  background: #fff;
  padding: 2em;
  width: 100%;
  min-height: 95vh;
  position: fixed;
  border-radius: 1em;

  .account_pages_title {
    margin: 1em 0 1.7em;
    font-weight: 600;
    color: #969494;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
`

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
