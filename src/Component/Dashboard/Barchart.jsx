import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'


const Barchart = () => {

    const [state, setState] = useState({

        series: [{
            data: [470, 350, 250, 200, 100]
        }],
        options: {
            grid: {
                // show: false,      // you can either change hear to disable all grids
                xaxis: {
                  lines: {
                    show: true,
                    style: {
                        color:  'orange',
                      },
                   }
                 },  
                yaxis: {
                  lines: { 
                    show: false //or just here to disable only y axis
                   }
                 },   
              },
            title: {
                text:'Topic',
                align: 'left',
                offsetX: 10,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize:  '14px',
                  fontWeight:  '500',
                  color:  'white',
                },
            },
            colors: ['#0A69D0', '#C438EF', '#EEF11B', '#F56B3F', '#5494A3'],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    tools: {
                        download: '<img src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png" class="iconDownload" width="20">'
                    }
                }
            },
            plotOptions: {
                bar: {
                    distributed: true,
                    borderRadius: 0,
                    barHeight: "50%",
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['Shipping and', 'Product', 'Customer Sati..', 'Pricing &.....', 'Website Or.......'
                ],
            }
        },
    })
    return (
        <>
            <ReactApexChart 
                options={state.options}
                series={state.series}
                type="bar"
                height={180} 
                className="barChart"/>
        </>
    )
}

export default Barchart