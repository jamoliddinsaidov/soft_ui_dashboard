import styled from 'styled-components'

export const StyledSidenav = styled.nav`
  background: #fff;
  padding: 2em;
  width: 100%;
  height: 95vh;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 1em;

  &::-webkit-scrollbar {
    width: 0;
  }

  .account_pages_title {
    margin: 1em 0 1.7em;
    font-weight: 600;
    color: #969494;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
`
