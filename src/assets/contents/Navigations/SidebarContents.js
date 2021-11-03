import { MdStore, MdBusiness, MdAccountBalanceWallet, MdAccountCircle } from 'react-icons/md'
import { IoIosRocket } from 'react-icons/io'
import { IoEnter } from 'react-icons/io5'

export const SidebarMainContents = [
  {
    icon: <MdStore />,
    title: 'Dashboard',
    link: '/dashboard',
  },
  {
    icon: <MdBusiness />,
    title: 'Tables',
    link: '/tables',
  },
  {
    icon: <MdAccountBalanceWallet />,
    title: 'Billing',
    link: '/billing',
  },
]

export const SidebarAccountContents = [
  {
    icon: <MdAccountCircle />,
    title: 'Profile',
    link: '/profile',
  },
  {
    icon: <IoEnter />,
    title: 'Sign In',
    link: '/signin',
  },
  {
    icon: <IoIosRocket />,
    title: 'Sign Up',
    link: '/signup',
  },
]
