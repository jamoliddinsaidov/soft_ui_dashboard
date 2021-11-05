import React from 'react'

// styles
import { StyledImageAndTexts } from './styles/StyledImgAndTxts'

const ImageAndTexts = ({ image, title, additional, border }) => {
  return (
    <StyledImageAndTexts border={border}>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        {additional && <p>{additional}</p>}
      </div>
    </StyledImageAndTexts>
  )
}

export default ImageAndTexts
