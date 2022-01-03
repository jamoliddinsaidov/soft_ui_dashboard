import styled from 'styled-components'
import { colors, FlexBetween } from '../../../GlobalStyles'
import { NavLink } from 'react-router-dom'

export const StyledTopNav = styled(FlexBetween)`
  width: 80%;
  margin: 1rem auto;
  background: rgba(255, 255, 255, 0.9);
  z-index: 2;
  padding: .7em 2em;
  border-radius: 2rem;
  box-shadow: 0px 2px 7px -6px rgba(0, 0, 0, 1);
}

  h4{
    color: ${colors.iconColor};
  }

  button {
    border-radius: 2rem;
  }
`

export const StyledLinksContainer = styled(FlexBetween)``

export const StyledNavLink = styled(NavLink)`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  color: ${colors.textColor};
  transition: color 400ms ease;

  .icon {
    font-size: 1.15rem;
    margin-top: 0.3em;
  }

  .text {
    font-size: 1rem;
    margin-left: 0.2em;
    font-weight: 500;
  }

  &.active,
  &:hover {
    color: ${colors.iconColor};
  }
`
