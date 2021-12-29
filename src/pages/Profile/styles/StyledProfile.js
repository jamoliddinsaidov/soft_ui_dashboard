import styled from 'styled-components'
import { Flex, FlexBetween, colors, CardContainer } from '../../../GlobalStyles'
import { StyledTopHeader } from '../../../components/Headers/styles/TopHeader'
import { StyledImageAndTexts } from '../../../components/ImageAndTexts/styles/StyledImgAndTxts'

export const StypedProfileHeader = styled(StyledTopHeader)`
  position: relative;
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
    font-weight: 600;
  }

  h4.platform-heading {
    font-weight: bold;
    margin-bottom: 2rem;
    letter-spacing: 0.5px;
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

export const StyledContact = styled(StyledImageAndTexts)`
  margin: 1rem 0 1.5rem;

  img {
    box-shadow: 3px 2px 7px -12px rgba(0, 0, 0, 1);
    margin-right: 0.5rem;
  }

  p.title {
    font-size: 1rem;
    color: ${colors.iconColor};
    font-weight: 500;
  }

  p.subtitle {
    font-size: 0.8rem;
    color: ${colors.textColor};
    font-weight: 400;
    margin-top: 0.2rem;
  }

  p.reply {
    text-transform: uppercase;
    color: ${colors.lightBlue};
    font-size: 0.8rem;
    font-weight: bold;
    transition: color 300ms ease;
    cursor: pointer;

    &:hover {
      color: ${colors.darkBlue};
    }
  }
`

export const StyledProfileProjectsContainer = styled(CardContainer)`
  margin-top: 1.5rem;
  padding: 1.5em 1em;

  .profile-job {
    color: ${colors.textColor};
    margin: 1rem 0;
  }

  .projects-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .new-project {
    width: 24%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 1rem;

    p {
      color: ${colors.textColor};
      font-weight: bold;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }
`
