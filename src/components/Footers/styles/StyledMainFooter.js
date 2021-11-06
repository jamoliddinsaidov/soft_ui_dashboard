import styled from 'styled-components'
import { colors, FlexBetween } from '../../../GlobalStyles'

export const StyledMainFooter = styled(FlexBetween)`
  margin-top: 2em;
  color: ${colors.textColor};

  p {
    display: flex;
    align-items: center;

    svg {
      margin: 0 3px;
    }
  }

  a {
    margin: 0 4px;
    color: ${colors.iconColor};
    font-weight: 500;
  }
`

export const SyledFooterLinks = styled(FlexBetween)`
  li {
    margin-left: 1em;
    color: ${colors.textColor};
    transition: color 300ms ease;
    cursor: pointer;

    a {
      color: inherit;
      font-weight: 400;
    }

    &:hover {
      color: ${colors.iconColor};
    }
  }
`
