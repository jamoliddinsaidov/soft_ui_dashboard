import React from 'react'

// components
import ImageAndTexts from '../ImageAndTexts/ImageAndTexts'

// styles
import { StyledPCHeader, StyledPCTableMembers, StyledCompletitionColumn } from './styles/StyledProjectsCard'

// utils
import { ImCheckmark } from 'react-icons/im'
import { GoKebabVertical } from 'react-icons/go'

const ProjectsCard = ({ tableHeaders, tableBody, StyledPCTable }) => {
  return (
    <>
      <StyledPCHeader>
        <div>
          <h3>Projects</h3>
          {tableHeaders.includes('Companies') && (
            <p>
              <ImCheckmark /> <span>30 done</span> this month
            </p>
          )}
        </div>

        {tableHeaders.includes('Companies') && (
          <button>
            <GoKebabVertical />
          </button>
        )}
      </StyledPCHeader>

      <StyledPCTable>
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

              {body.members && (
                <StyledPCTableMembers>
                  {body.members.map((member) => (
                    <img src={member} alt={member} key={member + index} />
                  ))}
                </StyledPCTableMembers>
              )}

              <td className='budget_column'>{body.budget}</td>

              {body.status && <td className='status_column'>{body.status}</td>}

              <StyledCompletitionColumn amount={body.completition} isCompany={tableHeaders.includes('Companies')}>
                <div></div>
              </StyledCompletitionColumn>

              {body.action && <td>{body.action}</td>}
            </tr>
          ))}
        </tbody>
      </StyledPCTable>
    </>
  )
}

export default ProjectsCard
