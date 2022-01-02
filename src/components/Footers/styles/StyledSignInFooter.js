import styled from 'styled-components'
import { colors } from '../../../GlobalStyles'

export const StyledSignInFooter = styled.div`
  width: 60%;
  margin: 1rem auto;

  a,
  svg {
    color: #a1a1a1;
    display: block;
    transition: color 400ms ease;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: ${colors.iconColor};
    }
  }

  .socials,
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .links {
    width: 50%;
    margin: 0 auto;
  }

  .socials {
    margin: 2rem auto;
    width: 25%;

    svg {
      font-size: 1.2rem;
    }
  }
`
