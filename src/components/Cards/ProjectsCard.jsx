import React from 'react'

// styles
import { StyledProjectsCard, StyledPCHeader } from './styles/StyledProjectsCard'

// utils
import { ImCheckmark } from 'react-icons/im'
import { GoKebabVertical } from 'react-icons/go'

const ProjectsCard = () => {
  return (
    <StyledProjectsCard>
      <StyledPCHeader>
        <div>
          <h3>Projects</h3>
          <p>
            <ImCheckmark /> <span>30 done</span> this month
          </p>
        </div>

        <button>
          <GoKebabVertical />
        </button>
      </StyledPCHeader>
    </StyledProjectsCard>
  )
}

export default ProjectsCard
