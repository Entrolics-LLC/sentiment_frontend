import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaFilter } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="sideBar">
        <div><Link className="iconSideBar" to="/submission">
          <AiOutlineMenu />
        </Link>
        </div>
        <div ><Link className="iconSideBar" to="/responses">
          <FaFilter />
        </Link>
        </div>
        <div ><Link className="iconSideBar" to="/dashboard">
          <FaCalendarAlt />
        </Link>
        </div>
        <div ><Link className="iconSideBar" to="/login">
          <SearchIcon />
        </Link></div>
      </div>
    </>
  )
}

export default Sidebar