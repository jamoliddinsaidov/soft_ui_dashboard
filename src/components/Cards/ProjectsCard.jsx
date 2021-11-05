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

const ProjectsCard = ({ tableHeaders, tableBody }) => {
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
            {tableHeaders.map((header, index) => (
              <th key={header + index}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableBody.map((body, index) => (
            <tr key={body.name + index}>
              <td className='company_column'>
                <ImageAndTexts image={body.img} title={body.name} />
              </td>
              <StyledPCTableMembers>
                {body.members.map((member) => (
                  <img src={member} alt={member} key={member + index} />
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
