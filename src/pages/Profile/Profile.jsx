import React, { useState } from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import ProfileTopHeader from '../../components/Headers/ProfileTopHeader'
import MainProfileInfo from '../../components/ImageAndTexts/ImageAndTexts'
import IconAndText from '../../components/ImageAndTexts/IconAndText'
import PlatformSettings from '../../components/Cards/PlatformSettings'

// styles
import {
  StypedProfileHeader,
  ProfileTopHeaderIcons,
  StyledPlatformSettingsContainer,
  StyledPlatformSettings,
  StyledProfileDetails,
} from './styles/StyledProfile'

// contents
import { ProfileInfoContent, ProfileTopHeaderIconContent } from '../../assets/contents/Profile/ProfileInfoContent'
import {
  PlatformSettingsAccountContent,
  PlatformSettingsApplicationContent,
} from '../../assets/contents/Profile/PlatformSettingsContent'
import {
  ProfileDescriptionContent,
  ProfileDetailsContent,
} from '../../assets/contents/Profile/ProfileInformationContent'

const Profile = () => {
  const [isIconActive, setIsIconActive] = useState([true, false, false])

  // handlers
  const handleIconClick = (index) => {
    let newArr = [...isIconActive]
    let currentActiveIndex = newArr.findIndex((state) => state)
    newArr[currentActiveIndex] = false
    newArr[index] = true
    setIsIconActive(newArr)
  }

  return (
    <MainLayout>
      <ProfileTopHeader page='Profile' />
      <StypedProfileHeader>
        <MainProfileInfo
          image={ProfileInfoContent.img}
          title={ProfileInfoContent.name}
          subtitle={ProfileInfoContent.msg}
          borderRadius={20}
          imgWidth={13}
        />

        <ProfileTopHeaderIcons>
          {ProfileTopHeaderIconContent.map((content, index) => (
            <IconAndText
              icon={content.icon}
              text={content.title}
              key={index + content.title}
              index={index}
              isIconActive={isIconActive}
              handleIconClick={handleIconClick}
            />
          ))}
        </ProfileTopHeaderIcons>
      </StypedProfileHeader>

      <StyledPlatformSettingsContainer>
        <StyledPlatformSettings>
          <h4>Platform Settings</h4>
          <PlatformSettings title='account' content={PlatformSettingsAccountContent} />
          <PlatformSettings title='application' content={PlatformSettingsApplicationContent} />
        </StyledPlatformSettings>

        <StyledPlatformSettings>
          <h4>Profile Information</h4>

          <p className='profile-description'>{ProfileDescriptionContent.text}</p>

          {ProfileDetailsContent.map(({ title, detail }) => (
            <StyledProfileDetails key={title}>
              <h4>{title}</h4>
              <p>{detail}</p>
            </StyledProfileDetails>
          ))}
        </StyledPlatformSettings>

        <StyledPlatformSettings>
          <h4>Conversations</h4>
        </StyledPlatformSettings>
      </StyledPlatformSettingsContainer>
    </MainLayout>
  )
}

export default Profile
