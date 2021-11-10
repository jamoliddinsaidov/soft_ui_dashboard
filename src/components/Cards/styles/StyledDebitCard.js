import styled from 'styled-components'
import { colors, FlexColumn, FlexBetween } from '../../../GlobalStyles'

export const StyledDebitCard = styled(FlexColumn)`
  width: 47%;
  background-image: ${({ bgImg }) => `url(${bgImg})`};
  padding: 1.5em 1em;
  color: #fff;
  border-radius: 1em;
  box-shadow: 3px 2px 7px -7px rgba(0, 0, 0, 1);

  .card_icon {
    font-size: 1.5rem;
  }

  .card_num {
    margin: 1em 0 2em;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
`
export const StyledCredentials = styled(FlexBetween)`
  table {
    text-align: left;
    flex: 1.2;
  }

  th {
    color: #fff;
    opacity: 0.8;
    font-weight: 400;
    padding-bottom: 0.5rem;
  }

  td {
    font-size: 1.05rem;
    margin-top: 2em;
    font-weight: 500;
  }

  img {
    width: 30%;
  }

  div {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
`
