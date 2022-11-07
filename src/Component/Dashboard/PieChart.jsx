import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const PieChart = () => {
    const [state, setState] = useState({
        series: [40, 30, 25],
        options: {
            title: {
                text: 'Overall Sentiment',
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
                enabled: true
            },
            colors: ['#37BF96', '#EA9635', '#F9440B'],
            chart: {
                type: 'donut',
                toolbar: {
                    show:true,
                    tools: {
                        download: '<span class="chartIcon">...</span>'
                    }
                }
            },
            plotOptions: {
                pie: {
                    expandOnClick: false
                }
            },
            stroke: {
                show: false,
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        show: false
                    }
                }
            }],
            legend: {
                position: 'right',
                offsetY: 0,
                height: 200,
            }
        },
    })
    return (
        <>
            <ReactApexChart options={state.options}
                series={state.series} type="donut" width={240}
                height={170} />
        </>
    )
}

export default PieChart