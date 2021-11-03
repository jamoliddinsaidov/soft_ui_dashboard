import styled from 'styled-components'
import { colors } from '../../../GlobalStyles'

export const StyledButton = styled.button`
  width: ${({ width }) => (width ? width : '100%')};
  margin-left: ${({ width }) => (width ? `-${(parseInt(width) - 100) / 2}%` : '0')};
  padding: 0.8em 1.6em;
  border: none;
  border-radius: 0.7em;
  background-image: ${({ bgColor }) => (bgColor ? bgColor : colors.backgroundColor)};
  color: ${({ color }) => (color ? color : colors.iconColor)};
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transform: scale(1);
  transition: all 400ms ease;

  &:hover {
    transform: scale(1.02);
  }
`
