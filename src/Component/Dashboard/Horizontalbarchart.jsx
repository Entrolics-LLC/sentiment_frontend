import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const Horizontalbarchart = () => {
    const [state, setState] = useState({

        series: [{
            name: 'Marine Sprite',
            data: [44, 55, 41, 22, 43]
        }, {
            name: 'Striking Calf',
            data: [53, 32, 33, 52, 13]
        }, {
            name: 'Tank Picture',
            data: [12, 17, 11, 9, 15]
        }, {
            name: 'Bucket Slope',
            data: [9, 7, 5, 8, 6]
        }, {
            name: 'Reborn Kid',
            data: [12, 19, 32, 25]
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
                text: 'Sentiment By Topic ',
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
            dataLabels: {
                enabled: false
            },
            colors: ['#37BF96', '#EA9635', '#F9440B'],
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                stackType: '100%',
                toolbar: {
                    tools: {
                        download: '<span class="chartIcon">...</span>'
                    }
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    border: 0,
                    barHeight: "50%",
                },
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                labels: {
                    show: false,
                },
                categories: ['Customer Sati...', 'Shipping and....', 'Product Fe....', 'Pricing &.....', 'Website Or...'],
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + "K"
                    }
                }
            },
            fill: {
                opacity: 1

            },
            stroke: {
                show: false,
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
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

export default Horizontalbarchart