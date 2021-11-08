import styled from 'styled-components'
import { StyledProjectsCard } from '../../Dashboard/styles/StyledDashboard'
import { FlexBetween, colors } from '../../../GlobalStyles'

export const StyledProjectsTable = styled(StyledProjectsCard)`
  margin-left: 0;
`
export const StyledPCTable = styled.table`
  th,
  td {
    border-bottom: 2px solid ${colors.backgroundColor};
    text-align: start;
  }

  th {
    padding-bottom: 2em;
    color: ${colors.textColor};
    font-size: 0.75rem;
    opacity: 0.5;
  }

  td:first-child {
    width: 30%;

    img {
      width: 10%;
    }
  }

  td {
    padding: 1em 0;
    color: ${colors.textColor};
  }

  th:nth-child(4),
  td:last-child,
  th:last-child {
    text-align: center;
  }

  .budget_column,
  .status_column {
    font-weight: 600;
  }

  .status_column {
    font-size: 0.9rem;
  }
`
