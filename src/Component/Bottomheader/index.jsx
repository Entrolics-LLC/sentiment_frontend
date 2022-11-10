import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CiHome } from 'react-icons/ci';
import { TiExport } from 'react-icons/ti';
import { AiOutlineBarChart } from 'react-icons/ai';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const leftBottomHeader = [
    {
        icon: <CiHome />,
        text: 'Dashboard'
    },
    {
        icon: <TiExport />,
        text: 'Submissions'
    },
    {
        icon: <AiOutlineBarChart />,
        text: 'Report'
    },
]

const Headerbottom = () => {
    return (
        <>
            <div className='bottom-header'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container>
                        {leftBottomHeader.map((v, i) => {
                            return (
                                <Grid item lg={1.5} md={1.7} xs={6} sm={6}>
                                    <div className='left'>
                                        <div className="iconBox">
                                            {v?.icon}
                                        </div>
                                        <p className='leftText'>{v?.text}</p>
                                    </div>
                                </Grid>
                            )
                        })}
                        <Grid item lg={6} sm={0.2} md={5.3}>
                        </Grid>
                        <Grid item lg={1.5} md={0}>
                            <div className='right'>
                                <button className='buttonBottomHeader'> <FaArrowAltCircleUp className='btn-icon' /> <span className='buttonText'>Upload</span></button>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default Headerbottom