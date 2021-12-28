import styled from 'styled-components'
import { Flex, FlexBetween, colors, CardContainer } from '../../../GlobalStyles'
import { StyledTopHeader } from '../../../components/Headers/styles/TopHeader'

export const StypedProfileHeader = styled(StyledTopHeader)`
  width: 95%;
  margin: -3em auto 2em;
  padding: 1.5em 1em;
  box-shadow: rgb(255 255 255 / 90%) 0rem 0rem 0.0625rem 0.0625rem inset, rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
`

export const ProfileTopHeaderIcons = styled(FlexBetween)``

export const StyledPlatformSettingsContainer = styled(FlexBetween)`
  .profile-description {
    margin: 1em 0 1.5em;
    color: ${colors.textColor};
    line-height: 150%;
    font-size: 0.9rem;
  }

  align-items: stretch;
`

export const StyledPlatformSettings = styled(CardContainer)`
  width: 32%;

  h4 {
    font-weight: 500;
  }
`
export const StyledProfileDetails = styled(Flex)`
  margin: 0.8em 0;

  h5 {
    font-size: 1.1rem;
  }

  p {
    margin-left: 0.8rem;
    color: ${colors.textColor};
    font-size: 0.9rem;
    font-weight: 500;

    svg {
      margin-right: 1rem;
      transition: 400ms;
      cursor: pointer;
      &:hover {
        color: ${colors.iconColor};
      }
    }
  }
`
