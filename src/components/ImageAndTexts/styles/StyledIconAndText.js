import styled from 'styled-components'
import { colors, FlexBetween } from '../../../GlobalStyles'

export const StyledIconAndText = styled(FlexBetween)`
  margin-right: 2em;
  align-items: center;
  padding: 0.4rem 1.1rem;
  color: ${colors.iconColor};
  cursor: pointer;
  transition: all 300ms ease;

  p {
    margin-left: 0.5em;
  }

  &.icon_bg {
    box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 1);
    border-radius: 0.5rem;
    background: #fff;
  }
`
