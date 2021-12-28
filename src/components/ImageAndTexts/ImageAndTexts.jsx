import React from 'react'

// styles
import { StyledImageAndTexts } from './styles/StyledImgAndTxts'

const ImageAndTexts = ({ image, title, subtitle, border, borderRadius, imgWidth, isContact }) => {
  const MainComponent = () => (
    <>
      <img src={image} alt={title} />
      <div>
        <p className='title'>{title}</p>
        {subtitle && <p className='subtitle'>{subtitle}</p>}
      </div>
    </>
  )

  if (isContact) return <MainComponent />

  return (
    <StyledImageAndTexts border={border} borderRadius={borderRadius} imgWidth={imgWidth}>
      <MainComponent />
    </StyledImageAndTexts>
  )
}

export default ImageAndTexts
