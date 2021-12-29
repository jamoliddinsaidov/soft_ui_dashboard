import React, { useEffect } from 'react'

// components
import TopNav from '../components/Navigations/TopNav'

const TopNavigationLayout = ({ children }) => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div>
      <TopNav />
      {children}
    </div>
  )
}

export default TopNavigationLayout
