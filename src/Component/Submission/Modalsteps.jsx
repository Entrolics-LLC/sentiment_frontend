import React, { useState } from 'react'
import { Button, message, Steps, Divider, Modal } from 'antd';
import 'antd/dist/antd.css';
import Createsubmissionstep2 from './Createsubmissionstep2';
import Createsubmissionstep1 from './Createsubmissionstep1'

const steps = [
    {
        title: 'Step 1',
        content: <Createsubmissionstep1/>,
    },
    {
        title: 'Step 2',
        content: <Createsubmissionstep2/>,
    },
];

const Modalsteps = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    return (
        <>
            <Button onClick={showModal} className='createButton'>
                Create Submisssion
            </Button>
            <Modal open={isModalOpen} onCancel={handleCancel} className='modalSubmission'>
                <Steps current={current} items={items} labelPlacement="vertical"/>
                <Divider className='line'/>
                <div className="steps-content">{steps[current].content}</div>
                <div className="stepsAction">
                    {current < steps.length - 1 && (
                        <Button className='modalButton' onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current > 0 && (
                        <Button className='backButton'
                            onClick={() => prev()}
                        >
                            Back
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button className='modalButton' onClick={() => message.success('Your Job has been submitted and Processing')}>
                            Submit
                        </Button>
                    )}
                </div>
            </Modal>
        </>
    )
}

export default Modalsteps