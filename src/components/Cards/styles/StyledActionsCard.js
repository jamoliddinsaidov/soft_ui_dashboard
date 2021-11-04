import styled from 'styled-components'
import { FlexBetween, colors } from '../../../GlobalStyles'
import { StyledIcon } from './StyledGrowthCard'

export const StyledActionsCard = styled(FlexBetween)`
  align-items: flex-start;
  margin-top: 2em;
  padding: 1em;
  border-radius: 1em;
  box-shadow: 3px 2px 7px -8px rgba(0, 0, 0, 1);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ bgImg }) => (bgImg ? `${colors.iconColor}` : '#fff')};
  background-image: ${({ bgImg }) =>
    bgImg
      ? `linear-gradient(310deg, rgba(20, 23, 39, 0.8), rgba(58, 65, 111, 0.8)),
  url(${bgImg})`
      : '#fff'};
`

export const StyledActionsContent = styled.div`
  display: flex;
  flex-direction: column;

  h4,
  p,
  a {
    color: ${({ bgImg }) => (bgImg ? '#fff' : `${colors.textColor}`)};
  }

  h4 {
    font-weight: 600;
    margin-bottom: 0.5em;
    font-size: ${({ bgImg }) => (bgImg ? '1.5rem' : '1rem')};
  }

  p {
    margin-top: 0.5em;
    line-height: 140%;
    font-size: 1rem;
  }

  h3 {
    color: ${colors.iconColor};
  }

  a {
    display: flex;
    align-items: center;
    font-weight: bold;

    svg {
      margin-left: 0.2em;
      align-self: flex-end;
      transition: margin 300ms ease;
    }

    &:hover {
      svg {
        margin-left: 0.5em;
      }
    }
  }
`

export const StyledACtionsImage = styled(StyledIcon)`
  padding: 1.8em 0.6em;

  img {
    width: 100%;
    object-fit: contain;
  }
`
