import img1 from '../../images/small-logos/logo-xd.svg'
import img2 from '../../images/small-logos/logo-atlassian.svg'
import img3 from '../../images/small-logos/logo-slack.svg'
import img4 from '../../images/small-logos/logo-spotify.svg'
import img5 from '../../images/small-logos/logo-jira.svg'
import img6 from '../../images/small-logos/logo-invision.svg'
import { GoKebabVertical } from 'react-icons/go'

export const ProjectsCardTableHeaders = ['PROJECT', 'BUDGET', 'STATUS', 'COMPLETION', 'ACTION']

export const ProjectsCardTableBody = [
  {
    img: img4,
    name: 'Spotift',
    budget: '$2,500',
    status: 'working',
    completition: 60,
    action: <GoKebabVertical />,
  },
  {
    img: img6,
    name: 'Invesion',
    budget: '$5,000',
    status: 'done',
    completition: 100,
    action: <GoKebabVertical />,
  },
  {
    img: img5,
    name: 'Invesion',
    budget: '$3,400',
    status: 'canceled',
    completition: 30,
    action: <GoKebabVertical />,
  },
  {
    img: img3,
    name: 'Slack',
    budget: '$1,400',
    status: 'canceled',
    completition: 0,
    action: <GoKebabVertical />,
  },
  {
    img: img2,
    name: 'Atlassian',
    budget: '$1,4000',
    status: 'working',
    completition: 80,
    action: <GoKebabVertical />,
  },
  {
    img: img1,
    name: 'Adobe XD',
    budget: '$2,300',
    status: 'done',
    completition: 100,
    action: <GoKebabVertical />,
  },
]
