import React from 'react'
import { Link } from 'react-router-dom'

// styles
import { StyledActionsCard, StyledActionsContent, StyledACtionsImage } from './styles/StyledActionsCard'

// utils
import { MdArrowForward } from 'react-icons/md'

const ActionsCard = ({ title, subtitle, text, img, bgImg }) => {
  return (
    <StyledActionsCard bgImg={bgImg}>
      <StyledActionsContent bgImg={bgImg}>
        <div>
          <h4>{title}</h4>
          {subtitle && <h3>{subtitle}</h3>}
          <p>{text}</p>
        </div>
        <Link to='/'>
          Read more <MdArrowForward />
        </Link>
      </StyledActionsContent>

      {img && (
        <StyledACtionsImage>
          <img src={img} alt={title} />
        </StyledACtionsImage>
      )}
    </StyledActionsCard>
  )
}

export default ActionsCard
