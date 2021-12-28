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

export const StyledPlatformSettingsContainer = styled(FlexBetween)``

export const StyledPlatformSettings = styled(CardContainer)`
  width: 32%;

  h4 {
    font-weight: 500;
  }
`
