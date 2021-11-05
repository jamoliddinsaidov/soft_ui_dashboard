import React from 'react'

// styles
import { StyledImageAndTexts } from './styles/StyledImgAndTxts'

const ImageAndTexts = ({ image, title, subtitle, border }) => {
  return (
    <StyledImageAndTexts border={border}>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </StyledImageAndTexts>
  )
}

export default ImageAndTexts
