import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const Stackchart = () => {
    const [state, setState] = useState({
        series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
        }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
        }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
        }, {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 8]
        }, {
            name: 'PRODUCT E',
            data: [21, 7, 25, 13, 22, 8]
        }],
        options: {
            xaxis: {
                labels:{
                    style:{
                        colors:'#FFFFFFB0'
                    }
                },
            },
            yaxis: {
                labels:{
                    style:{
                        colors:'#FFFFFFB0'
                    }
                },
            },
            dataLabels: {
                enabled: false
             },
            title: {
                text: 'Topics over Time',
                align: 'left',
                offsetX: 10,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'white',
                },
            },
            colors: ['#0A69D0', '#5B5A99', '#F9440B', '#EC913D', '#37BF96'],
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    tools: {
                        download: '<img src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png" class="iconDownload" width="20">'
                    },
                    show: true
                },
                zoom: {
                    enabled: false
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    },
                    
                }
            }],
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    barHeight: "50%",
                    horizontal: false,
                },
            },

            fill: {
                opacity: 1
            }
        },

    }
    )
    return (
        <>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="bar"
                height={180}
                className="charts" />
        </>
    )
}

export default Stackchart