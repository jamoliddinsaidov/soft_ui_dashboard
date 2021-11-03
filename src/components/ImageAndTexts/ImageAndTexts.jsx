import React from 'react'

const ImageAndTexts = ({ image, title, additional }) => {
  return (
    <>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        {additional && <p>{additional}</p>}
      </div>
    </>
  )
}

export default ImageAndTexts
