import styled from 'styled-components'
import { colors } from '../../../GlobalStyles'

export const StyledAuthorsCard = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 1em;
  padding: 1em;
  box-shadow: 3px 2px 7px -12px rgba(0, 0, 0, 1);

  h4 {
    color: ${colors.iconColor};
    font-weight: 500;
    margin-left: 0.5em;
  }
`

export const StyledACTable = styled.table`
  width: 100%;
  margin: 1em auto;
  border-collapse: collapse;
  color: ${colors.textColor};

  th {
    text-align: start;
    font-size: 0.65rem;
    opacity: 0.6;
  }

  td {
    width: 15%;
  }

  td,
  th {
    padding: 1em;
  }

  tr {
    border-bottom: 2px solid ${colors.backgroundColor};
  }

  .author {
    width: 100%;
    display: flex;
    align-items: flex-end;

    img {
      width: 8%;
      border-radius: 0.5em;
    }

    div {
      margin-left: 1em;
    }
  }

  .name {
    color: ${colors.iconColor};
  }

  .email,
  .job_type,
  .job_title {
    font-size: 0.8rem;
  }

  .name,
  .email,
  .job_title {
    font-weight: 500;
  }

  .grey_text {
    p {
      font-size: 0.8rem;
      font-weight: 500;
      color: ${colors.textColor};
      opacity: 0.8;
    }
  }
`
export const StyledAuthorStatus = styled.td`
  p {
    padding: 0.375em 0.675em;
    border-radius: 0.25rem;
    font-size: 0.65rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    display: inline;
    color: #fff;
    background: ${({ status }) => (status === 'online' ? colors.greenGradient : colors.greyGradient)};
  }
`
