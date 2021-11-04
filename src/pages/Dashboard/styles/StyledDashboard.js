import styled from 'styled-components'
import { FlexBetween } from '../../../GlobalStyles'

export const StyledGrowthCards = styled(FlexBetween)``

export const StyledActionsCards = styled(FlexBetween)`
  div {
    min-height: 27vh;
  }

  div:first-child {
    flex: 1.5;
    margin-right: 2em;
  }

  div:nth-child(2) {
    flex: 1;
  }
`

export const StyledProjectsContainer = styled(FlexBetween)`
  margin-top: 2em;

  div:first-child {
    flex: 1;
  }

  div:nth-child(2) {
    flex: 2;
    margin-left: 2em;
  }
`
