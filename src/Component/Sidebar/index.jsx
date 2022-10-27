import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaFilter} from 'react-icons/fa'
import {FaCalendarAlt} from 'react-icons/fa'
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
  return (
    <>
      <div className="sideBar">
        <div className="iconSideBar"><AiOutlineMenu/></div>
        <div className="iconSideBar"><FaFilter/></div>
        <div className="iconSideBar"><FaCalendarAlt/></div>
        <div className="iconSideBar"><SearchIcon /></div>
      </div>
    </>
  )
}

export default Sidebar