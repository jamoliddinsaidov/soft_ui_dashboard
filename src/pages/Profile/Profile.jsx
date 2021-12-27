import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import ProfileTopHeader from '../../components/Headers/ProfileTopHeader'
import MainProfileInfo from '../../components/ImageAndTexts/ImageAndTexts'
import IconAndText from '../../components/ImageAndTexts/IconAndText'

// styles
import { StypedProfileHeader, ProfileTopHeaderIcons } from './styles/StyledProfile'

// contents
import { ProfileInfoContent, ProfileTopHeaderIconContent } from '../../assets/contents/Profile/ProfileInfoContent'

const Profile = () => {
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
            <IconAndText icon={content.icon} text={content.title} key={index + content.title} />
          ))}
        </ProfileTopHeaderIcons>
      </StypedProfileHeader>
      <h2>Profile page content goes here</h2>
    </MainLayout>
  )
}

export default Profile
