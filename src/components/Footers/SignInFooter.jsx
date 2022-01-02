import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa'

// styles
import { StyledSignInFooter } from './styles/StyledSignInFooter'

const SignInFooter = () => {
  return (
    <StyledSignInFooter>
      <div className='links'>
        <Link to='#'>Company</Link>
        <Link to='#'>About Us</Link>
        <Link to='#'>Team</Link>
        <Link to='#'>Product</Link>
        <Link to='#'>Blog</Link>
        <Link to='#'>Pricing</Link>
      </div>

      <div className='socials'>
        <FaFacebookSquare />
        <FaTwitter />
        <FaInstagram />
        <FaPinterest />
        <FaLinkedin />
      </div>
    </StyledSignInFooter>
  )
}

export default SignInFooter
