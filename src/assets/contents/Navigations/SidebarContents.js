import { MdStore, MdBusiness, MdAccountBalanceWallet, MdAccountCircle } from 'react-icons/md'
import { IoIosRocket } from 'react-icons/io'
import { IoEnter } from 'react-icons/io5'

export const SidebarContents = [
  {
    icon: <MdStore />,
    title: 'Dashboard',
  },
  {
    icon: <MdBusiness />,
    title: 'Tables',
  },
  {
    icon: <MdAccountBalanceWallet />,
    title: 'Billing',
  },
  {
    icon: <MdAccountCircle />,
    title: 'Profile',
  },
  {
    icon: <IoEnter />,
    title: 'Sign In',
  },
  {
    icon: <IoIosRocket />,
    title: 'Sign Up',
  },
]
