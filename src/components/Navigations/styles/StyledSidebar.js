import styled from 'styled-components'
import { colors, Flex } from '../../../GlobalStyles'
import { NavLink } from 'react-router-dom'

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
export const StyledSidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  transition: all 400ms ease;
  margin-bottom: 1.5em;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5em;
    font-size: 1rem;
    background: ${colors.backgroundNavColor};
    border: none;
    border-radius: 0.5em;
    box-shadow: 3px 2px 10px -5px rgba(0, 0, 0, 0.51);
    cursor: pointer;
    color: ${colors.iconColor};
  }

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
