import React from 'react'

// styles
import { StyledAuthorsCard, StyledACTable, StyledAuthorStatus } from './styles/StyledAuthorsCard'

const AuthorsCard = ({ contentHeaders, contentBody }) => {
  return (
    <StyledAuthorsCard>
      <h4>Authors table</h4>

      <StyledACTable>
        <thead>
          <tr>
            {contentHeaders.map((header, index) => (
              <th key={header + index}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {contentBody.map((body, index) => (
            <tr key={body.name + index}>
              <td className='author'>
                <img src={body.img} alt={body.name} />
                <div>
                  <p className='name'>{body.name}</p>
                  <p className='email'>{body.email}</p>
                </div>
              </td>

              <td>
                <p className='job_title'>{body.jobTitle}</p>
                <p className='job_type'>{body.jobType}</p>
              </td>

              <StyledAuthorStatus status={body.status}>
                <p>{body.status}</p>
              </StyledAuthorStatus>

              <td className='grey_text'>
                <p>{body.employedDate}</p>
              </td>

              <td className='grey_text'>
                <p>{body.action}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledACTable>
    </StyledAuthorsCard>
  )
}

export default AuthorsCard
