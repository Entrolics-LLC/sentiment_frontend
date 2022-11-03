import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'


const Barchart = () => {
    const [state, setState] = useState({
        series: [{
            data: [470, 350, 250, 200, 100]
        }],
        options: {
            grid: {
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                padding: {
                    top: -10,
                    right: 0,
                    bottom: 20,
                    left: 0
                },
            },
            title: {
                text: 'Topic',
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
            colors: ['#0A69D0', '#C438EF', '#EEF11B', '#F56B3F', '#5494A3'],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    tools: {
                        download: '<span class="chartIcon">...</span>'
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
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false
                  },
                labels: {
                    show: false,
                },
                categories: ['Shipping and', 'Product', 'Customer Sati..', 'Pricing &.....', 'Website Or.......'
                ],
            },
            yaxis: {
                labels:{
                    style:{
                        colors:'#FFFFFFB0',
                    }
                },
            },
            
        },
    })
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

export default Barchart