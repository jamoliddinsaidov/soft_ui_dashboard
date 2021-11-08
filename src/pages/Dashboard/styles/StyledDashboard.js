import styled from 'styled-components'
import { FlexBetween, colors } from '../../../GlobalStyles'

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
    flex: 2.2;
  }
`
export const StyledProjectsCard = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 1em;
  padding: 2em;
  box-shadow: 3px 2px 7px -12px rgba(0, 0, 0, 1);
  margin-left: 2em;
`
export const StyledPCTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th:first-child,
  th:nth-child(2) {
    text-align: start;
  }

  th,
  td {
    border-bottom: 2px solid ${colors.backgroundColor};
  }

  th {
    padding-bottom: 2em;
    color: ${colors.textColor};
    text-transform: uppercase;
    font-size: 0.75rem;
    opacity: 0.5;
  }

  td:first-child {
    width: 45%;

    img {
      width: 10%;
    }
  }

  td {
    padding: 1em 0;
    color: ${colors.textColor};
  }

  .budget_column {
    font-weight: 500;
    font-size: 0.9rem;
    width: 22%;
    text-align: center;
  }

  .company_column {
    p {
      color: ${colors.iconColor};
    }
  }
`
