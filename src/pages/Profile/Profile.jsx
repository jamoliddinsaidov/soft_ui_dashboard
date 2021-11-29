import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import ProfileTopHeader from '../../components/Headers/ProfileTopHeader'

// styles
import { StyleProfileTopHeader } from './styles/StyledProfile'

const Profile = () => {
  return (
    <MainLayout>
      <ProfileTopHeader page='Profile' />
      <h2>Profile page content goes here</h2>
    </MainLayout>
  )
}

export default Profile
