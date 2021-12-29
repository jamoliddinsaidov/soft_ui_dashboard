import styled from 'styled-components'
import { colors } from '../../../GlobalStyles'
import { NavLink } from 'react-router-dom'

export const StyledSidenavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;

  p {
    font-size: 1rem;
    margin-left: 0.8em;
    color: ${colors.textColor};
  }

  &.active {
    button {
      background: ${colors.lightBlue};
      color: #fff;
    }

    p {
      font-weight: 600;
      color: #000;
    }
  }
`

export const StyledSidenavLinkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  font-size: 1rem;
  background: ${({ bgColor }) => (bgColor ? bgColor : '#fff')};
  border: none;
  border-radius: 0.5em;
  box-shadow: 0px 1px 10px -4.5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  color: ${({ color }) => (color ? color : colors.iconColor)};
`
