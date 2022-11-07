import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const Rangechart = () => {
    const [state, Setstate] = useState({
        series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
        }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
        }, {
            name: 'PRODUCT C',
            data: [40, 20, 30, 20, 21, 20]
        },],
        options: {
            legend: {
                show: true,
                markers: {
                  fillColors: ['#00E396', '#775DD0']
                }
              },
            stroke: {
                curve: 'straight'  
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: '#FFFFFFB0'
                    }
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#FFFFFFB0'
                    }
                },
            },
            dataLabels: {
                enabled: false
            },
            title: {
                text: 'Sentiment over Time',
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
            colors: ['#37BF96', '#EA9635', '#FFB6C1'],
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    tools: {
                        download: '<span class="chartIcon">...</span>'
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
    });
    return (
        <>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="area"
                height={180}
                className="charts" />
        </>
    )
}

export default Rangechart