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
import Rangechart from '../../Component/Dashboard/Rangechart'

const firstRow = [<BarChart />, <Rangechart />, <Stackchart />]
const secondRow = [<Stackchartrowtwo />, <WordCloud />, <PieChart />]
const Dashboard = () => {
  return (
    <>
      <Headertop />
      <Headerbottom />
      <Sidebar />
      <div className="dashboard">
        <div className="dasboardRowOne">
          {firstRow?.map((charts) => {
            return (<div className='dashboardBox'>
              {charts}
            </div>
            )
          })}
        </div>
        <div className="dasboardRowTwo">
          <div className='dashboardBox'>
            <Horizontalbarchart />
          </div>
          {secondRow?.map((smallCharts) => {
            return (
              <div className='smallBox'>
                {smallCharts}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Dashboard