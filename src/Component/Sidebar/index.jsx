import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaFilter } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const data = [
  {
    icon: <AiOutlineMenu />,
    link: "/submission"
  },
  {
    icon: <FaFilter />,
    link: "/responses"
  },
  {
    icon: <FaCalendarAlt />,
    link: "/dashboard"
  },
  {
    icon: <SearchIcon />,
    link: "/login"
  },
]

const Sidebar = () => {
  return (
    <>
      <div className="sideBar">
        {data.map((v) => {
          return (
            <div><Link className="iconSideBar" to={v?.link}>
              {v?.icon}
            </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Sidebar