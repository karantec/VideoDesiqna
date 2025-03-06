/** Icons are imported separatly to reduce build time */

import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'

import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'

import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'

import { FaBookBookmark } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { IoIosRadioButtonOn } from "react-icons/io";
const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  {
    path: '/app/leads', // url
    icon: <MdOutlineAddHomeWork className={iconClasses}/>, // icon component
    name: 'HomeWork', // name that appear in Sidebar
  },
  {
    path: '/app/RequestDemo', // url
    icon: <IoIosRadioButtonOn className={iconClasses}/>, // icon component
    name: 'Resume + LinkedIn', // name that appear in Sidebar
  },
  {
    path: '/app/BookDemo', // url
    icon: <FaBookBookmark className={iconClasses}/>, // icon component
    name: 'Main Course', // name that appear in Sidebar
  },
  {
    path: '/app/Feedback', // url
    icon: <VscFeedback className={iconClasses}/>, // icon component
    name: 'Full Stack Development', // name that appear in Sidebar
  },
  {
    path: '/app/offCampusCourse', // url
    icon: <VscFeedback className={iconClasses}/>, // icon component
    name: 'Off Campus Course', // name that appear in Sidebar
  },

  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component
  //   name: 'Profile', // name that appear in Sidebar
  //   submenu : [
  //     {
  //       path: '/login',
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
  //       name: 'Login',
  //     },
  //     {
  //       path: '/app/Register', //url
  //       icon: <UserIcon className={submenuIconClasses}/>, // icon component
  //       name: 'Register', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/app/ChangePassword', //url
  //       icon: <UserIcon className={submenuIconClasses}/>, // icon component
  //       name: 'ChangePassword', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/app/EditProfile', //url
  //       icon: <UserIcon className={submenuIconClasses}/>, // icon component
  //       name: 'Edit Profile', // name that appear in Sidebar
  //     },
  //     {
  //     path: '/app/Manual', //url
  //     icon: <UserIcon className={submenuIconClasses}/>, // icon component
  //     name: 'Manual', // name that appear in Sidebar
  //   },
  //     {
  //       path: '/forgot-password',
  //       icon: <KeyIcon className={submenuIconClasses}/>,
  //       name: 'Forgot Password',
  //     },
  //     {
  //       path: '/Verify-otp',
  //       icon: <KeyIcon className={submenuIconClasses}/>,
  //       name: 'OTP Verification',
  //     },
  //     {
  //       path: '/reset-password',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Reset Password',
  //     },
  //     {
  //       path: '/app/address',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Address',
  //     },

     
  //   ]
  // },
  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <Cog6ToothIcon className={`${iconClasses} inline` }/>, // icon component
  //   name: 'Settings', // name that appear in Sidebar
  //   submenu : [
  //     {
  //       path: '/app/settings-profile', //url
  //       icon: <UserIcon className={submenuIconClasses}/>, // icon component
  //       name: 'Profile', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/app/settings-billing',
  //       icon: <WalletIcon className={submenuIconClasses}/>,
  //       name: 'Billing',
  //     },
  //     {
  //       path: '/app/settings-team', // url
  //       icon: <UsersIcon className={submenuIconClasses}/>, // icon component
  //       name: 'Team Members', // name that appear in Sidebar
  //     },
  //   ]
  // },
  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <DocumentTextIcon className={`${iconClasses} inline` }/>, // icon component
  //   name: 'Documentation', // name that appear in Sidebar
  //   submenu : [
  //     {
  //       path: '/app/getting-started', // url
  //       icon: <DocumentTextIcon className={submenuIconClasses}/>, // icon component
  //       name: 'Getting Started', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/app/features',
  //       icon: <TableCellsIcon className={submenuIconClasses}/>, 
  //       name: 'Features',
  //     },
  //     {
  //       path: '/app/components',
  //       icon: <CodeBracketSquareIcon className={submenuIconClasses}/>, 
  //       name: 'Components',
  //     }
  //   ]
  // },
  
]

export default routes


