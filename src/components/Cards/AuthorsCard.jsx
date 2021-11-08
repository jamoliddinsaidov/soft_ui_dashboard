import React from 'react'
import { Link } from 'react-router-dom'

// styles
import { StyledAuthorsCard } from './styles/StyledAuthorsCard'

const AuthorsCard = ({ contentHeaders, contentBody }) => {
  return (
    <StyledAuthorsCard>
      <h4>Authors table</h4>

      <table>
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

              <td>
                <p>{body.status}</p>
              </td>

              <td>
                <p>{body.employedDate}</p>
              </td>

              <td>
                <Link href='#'>{body.action}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledAuthorsCard>
  )
}

export default AuthorsCard
