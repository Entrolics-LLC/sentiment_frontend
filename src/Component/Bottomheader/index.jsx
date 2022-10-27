import React from 'react'
import {CiHome} from 'react-icons/ci';
import {TiExport} from 'react-icons/ti';
import {AiOutlineBarChart} from 'react-icons/ai';
import {FaArrowAltCircleUp} from 'react-icons/fa';

const Headerbottom = () => {
    return (
        <>
            <div className='bottom-header'>
               
                <div className='left'>
                    <div className="iconBox">
                        <CiHome className='icon' />
                    </div>
                    <p className='leftText'>Dashboard</p>
                </div>
                <div className='left'>
                    <div className="iconBox">
                        <TiExport className='icon' />
                    </div>
                    <p className='leftText'>Submissions</p>

                </div>
                <div className='left'>
                    <div className="iconBox">   
                        <AiOutlineBarChart className='icon' />
                    </div>
                    <p className='leftText'> Report</p>
                </div>
                <div className='right'>
                    <button className='button'> <FaArrowAltCircleUp className='btn-icon'/> Upload</button>
                </div>
            </div>
           
           
        </>
    )
}

export default Headerbottom