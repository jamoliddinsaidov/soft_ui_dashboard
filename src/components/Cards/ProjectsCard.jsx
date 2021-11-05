import React from 'react'

// components
import ImageAndTexts from '../ImageAndTexts/ImageAndTexts'

// styles
import {
  StyledProjectsCard,
  StyledPCHeader,
  StylePCTable,
  StyledPCTableMembers,
  StyledCompletitionColumn,
} from './styles/StyledProjectsCard'

// utils
import { ImCheckmark } from 'react-icons/im'
import { GoKebabVertical } from 'react-icons/go'
import { ProjectsCardTableHeaders, ProjectsCardTableBody } from '../../assets/contents/Dashboard/ProjectsCardContent'

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

      <StylePCTable>
        <thead>
          <tr>
            {ProjectsCardTableHeaders.map((header, index) => (
              <th key={header + index}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {ProjectsCardTableBody.map((body, index) => (
            <tr key={body.companyName + index}>
              <td className='company_column'>
                <ImageAndTexts image={body.companyImg} title={body.companyName} />
              </td>
              <StyledPCTableMembers>
                {body.members.map((member) => (
                  <img src={member} alt={body.companyName} key={member + index} />
                ))}
              </StyledPCTableMembers>
              <td className='budget_column'>{body.budget}</td>
              <StyledCompletitionColumn amount={body.completition}>
                <div></div>
              </StyledCompletitionColumn>
            </tr>
          ))}
        </tbody>
      </StylePCTable>
    </StyledProjectsCard>
  )
}

export default ProjectsCard
