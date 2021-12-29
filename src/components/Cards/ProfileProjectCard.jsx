import React from 'react'

// styles
import { StyledProfileProjectCard } from './styles/StyledProfileProjectCard'
import { colors } from '../../GlobalStyles'

// components
import Button from '../Buttons/SidenavButton'

const ProfileProjectCard = ({ project: { img, number, name, description, people } }) => {
  return (
    <StyledProfileProjectCard>
      <img src={img} alt={name} className='main-img' />
      <p className='number'>{number}</p>
      <h4>{name}</h4>
      <p className='description'>{description}</p>

      <div className='card-footer'>
        <Button
          title='View Project'
          width={70}
          bgColor='#fff'
          color={colors.lightBlue}
          borderColor={colors.lightBlue}
        />
        <div className='people-container'>
          {people.map((person, index) => (
            <img src={person} alt={person} key={person + index} />
          ))}
        </div>
      </div>
    </StyledProfileProjectCard>
  )
}

export default ProfileProjectCard
