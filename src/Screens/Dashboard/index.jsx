import React from 'react'
import Headerbottom from '../../Component/Bottomheader'
import Headertop from '../../Component/Headertop'
import Sidebar from '../../Component/Sidebar'
import BarChart from '../../Component/Dashboard/Barchart'


const Dashboard = () => {
  return (
    <>
      <Headertop />
      <Headerbottom />
      <Sidebar/>
      <div className="dashboard">
      <div className="dasboardRowOne">
        <div className='dashboardBox'>
        <BarChart/>
        </div>
        <div className='dashboardBox'>
          hello
        </div>
        <div className='dashboardBox'>
          hello
        </div>
      </div>
      <div className="dasboardRowTwo">
        <div className='dashboardBox'>
          hello
        </div>
        <div className='smallBox'>
          hy from small box
        </div>
        <div className='smallBox'>
        hy from small box
        </div>
        <div className='smallBox'>
        hy from small box
        </div>
      </div>
      </div>
    </>
  )
}

export default Dashboard