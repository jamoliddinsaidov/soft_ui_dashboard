import styled from 'styled-components'
import { Flex, FlexBetween, colors } from '../../../GlobalStyles'

export const StyledTopHeader = styled(FlexBetween)`
  margin-top: -0.8em;
  margin-bottom: 2em;
  background: transparent;
  position: sticky;
  top: 30px;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  z-index: 2;
  backdrop-filter: blur(2rem);
  padding: 1em 2em;
  border-radius: 1em;
  box-shadow: 3px 2px 7px -7px rgba(0, 0, 0, 1);
`

export const BreadcrumbNav = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  h4 {
    margin-left: -2em;
  }

  h4,
  p,
  svg {
    color: ${colors.iconColor};
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 0.4em;

    svg {
      display: block;
      opacity: 0.5;
      font-size: 1.2rem;
    }

    p {
      margin: 0 0.4em;
      opacity: 0.7;
    }
  }
`

export const TopHeaderContainer = styled(FlexBetween)`
  a {
    margin-left: 1em;
    color: ${colors.iconColor};
    transition: color 300ms ease;

    svg {
      font-size: 1.15rem;
    }

    &:hover {
      color: ${colors.darkBlue};
    }
  }
`

export const StyledHeaderSearchBar = styled(Flex)`
  button,
  input {
    background: #fff;
    border: 1px solid #e0e0e0;
    font-size: 0.9rem;
    transition: all 400ms ease;

    &:active,
    &:focus {
      border: 2px solid ${colors.lightBlue};
      padding: 0.8em 1.4em;
    }
  }

  button {
    width: 20%;
    margin: 0 auto;
    border-right: none;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    cursor: pointer;
    padding: 0.7em 1.1em;

    svg {
      font-size: 1.2rem;
    }
  }

  input {
    width: 80%;
    border-left: none;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    outline: none;
    padding: 0.8em 1.1em;
  }
`
