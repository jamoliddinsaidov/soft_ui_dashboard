import styled from 'styled-components'
import { Flex, FlexBetween, colors } from '../../../GlobalStyles'
import { StyledTopHeader } from './TopHeader'
import bgImg from '../../../assets/images/curved-images/curved0.jpg'

export const StyledProfileHeaderContainer = styled.div`
  background: linear-gradient(310deg, rgba(33, 82, 255, 0.6), rgba(33, 212, 253, 0.6)) 100% center / cover,
    url(${bgImg}) transparent;
  background-size: cover;
  min-height: 37vh;
  box-shadow: 3px 2px 7px -7px rgba(0, 0, 0, 1);
  border-radius: 1em;
  margin-bottom: 1em;
`

export const StyledProfileTopHeader = styled(StyledTopHeader)`
  position: static;
  backdrop-filter: none;
  background: none;
  box-shadow: none;
  padding: none;
  border-radius: none;

  h4,
  p,
  svg,
  a,
  span {
    color: #fff !important;
  }

  button {
    svg {
      color: ${colors.iconColor} !important;
    }
  }
`
