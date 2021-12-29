import { MdDonutLarge } from 'react-icons/md'
import { MdAccountCircle, MdPerson, MdVpnKey } from 'react-icons/md'

export const TopNavContents = [
  {
    icon: <MdDonutLarge />,
    title: 'Dashboard',
    link: '/dashboard',
  },
  {
    icon: <MdPerson />,
    title: 'Profile',
    link: '/profile',
  },
  {
    icon: <MdAccountCircle />,
    title: 'Sign Up',
    link: '/signup',
  },
  {
    icon: <MdVpnKey />,
    title: 'Sign In',
    link: '/signin',
  },
]
