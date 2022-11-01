import React from 'react'
import Headerbottom from '../../Component/Bottomheader'
import Headertop from '../../Component/Headertop'
import Sidebar from '../../Component/Sidebar'
import BarChart from '../../Component/Dashboard/Barchart'
import Stackchart from '../../Component/Dashboard/Stackchart'
import Horizontalbarchart from '../../Component/Dashboard/Horizontalbarchart'
import WordCloud from '../../Component/Dashboard/Wordcloud/index'
import Stackchartrowtwo from '../../Component/Dashboard/Stackchartrowtwo'
import PieChart from '../../Component/Dashboard/PieChart'

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
         
        </div>
        <div className='dashboardBox'>
        <Stackchart/>
        </div>
      </div>
      <div className="dasboardRowTwo">
        <div className='dashboardBox'>
          <Horizontalbarchart/>
        </div>
        <div className='smallBox'>
        <Stackchartrowtwo/>
        </div>
        <div className='smallBox'>
        <WordCloud/>
        </div>
        <div className='smallBox'>
        <PieChart/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Dashboard