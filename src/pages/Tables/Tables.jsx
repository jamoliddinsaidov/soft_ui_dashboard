import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import TopHeader from '../../components/Headers/TopHeader'
import AuthorsCard from '../../components/Cards/AuthorsCard'

// utils
import { AuthorsCardContentHeaders, AuthorsCardContentBody } from '../../assets/contents/Tables/AuthorsCardContent'

const Tables = () => {
  return (
    <MainLayout>
      <TopHeader page='Tables' />
      <AuthorsCard contentHeaders={AuthorsCardContentHeaders} contentBody={AuthorsCardContentBody} />
    </MainLayout>
  )
}

export default Tables
