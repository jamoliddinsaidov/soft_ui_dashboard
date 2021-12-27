import styled from 'styled-components'
import { colors, Flex } from '../../../GlobalStyles'

export const StyledImageAndTexts = styled(Flex)`
  margin-bottom: ${({ border }) => (border ? '1.5em' : 'none')};
  padding-bottom: ${({ border }) => (border ? '1.5em' : 'none')};
  border-bottom: ${({ border }) => (border ? `2px solid ${colors.backgroundColor}` : 'none')};

  img {
    width: ${({ imgWidth }) => (imgWidth ? `${imgWidth}%` : '17%')};
    border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius}%` : 'none')};
    margin-right: ${({ imgWidth }) => (imgWidth ? `${1}em` : '0')};
  }

  p {
    margin-left: 0.5em;
    font-weight: 600;
    color: ${colors.textColor};
  }

  p.title {
    color: ${({ imgWidth }) => (imgWidth ? colors.iconColor : colors.textColor)};
    font-size: ${({ imgWidth }) => (imgWidth ? '1.2rem' : '1rem')};
    margin-bottom: ${({ imgWidth }) => (imgWidth ? '0.2em' : '0')};
    font-weight: ${({ imgWidth }) => (imgWidth ? '700' : '600')};
  }

  p.subtitle {
    font-size: ${({ imgWidth }) => (imgWidth ? '.9rem' : '1rem')};
  }
`
