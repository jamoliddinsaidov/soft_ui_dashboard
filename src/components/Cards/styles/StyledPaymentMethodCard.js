import styled from 'styled-components'
import { colors, Flex, FlexColumn } from '../../../GlobalStyles'

export const StyledPaymentMethodCard = styled(FlexColumn)`
  margin-top: 1em;
  width: 100%;
  background: #fff;
  border-radius: 1rem;
  padding: 1em;
  box-shadow: 3px 2px 7px -12px rgba(0, 0, 0, 1);

  .payment_methods {
    display: flex;
    margin-bottom: 1em;
  }

  h3 {
    flex: 4;
    font-weight: 500;
    color: ${colors.iconColor};
    font-size: 1rem;
  }

  button {
    flex: 0.8;
    font-size: 0.75rem;
  }
`
export const StyledCardNumberView = styled(Flex)`
  border: 0.0625rem solid rgb(222, 226, 230);
  border-radius: 1rem;
  padding: 1em 1.5em;

  &:nth-child(2),
  p {
    margin-left: 1em;
  }

  div {
    display: flex;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  img {
    width: 10%;
  }

  svg {
    font-size: 2.2rem;
    cursor: pointer;
  }

  p,
  svg {
    color: ${colors.iconColor};
  }
`
