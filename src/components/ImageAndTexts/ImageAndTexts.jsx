import React from 'react'

// styles
import { StyledImageAndTexts } from './styles/StyledImgAndTxts'

const ImageAndTexts = ({ image, title, subtitle, border, borderRadius, imgWidth }) => {
  return (
    <StyledImageAndTexts border={border} borderRadius={borderRadius} imgWidth={imgWidth}>
      <img src={image} alt={title} />
      <div>
        <p className='title'>{title}</p>
        {subtitle && <p className='subtitle'>{subtitle}</p>}
      </div>
    </StyledImageAndTexts>
  )
}

export default ImageAndTexts
