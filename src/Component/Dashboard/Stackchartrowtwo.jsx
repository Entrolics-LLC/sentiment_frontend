import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const Stackchartrowtwo = () => {
    const [state, setState] = useState({
        series: [{
            name: 'PRODUCT A',
            data: [4]
        }, {
            name: 'PRODUCT B',
            data: [5, 2, 8, 13]
        }, {
            name: 'PRODUCT C',
            data: [11, 17, 2, 21]
        }, {
            name: 'PRODUCT D',
            data: [1, 2, 2, 55]
        },
        ],
        options: {
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
                show: false,
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
                text: 'Sentiment By Rating',
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
            colors: ['#37BF96', '#EA9635', '#F9440B'],
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

export default Stackchartrowtwo