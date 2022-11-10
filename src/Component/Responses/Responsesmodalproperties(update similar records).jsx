import React, { useState } from 'react'
import { Button, Modal, Progress } from 'antd'
import ConfrimPrompt from './Responsesmodalproperties(update similar records and confirm prompt)'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

const Index = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    const [percent, setPercent] = useState(0);
    const increase = () => {
        let newPercent = percent + 10;
        if (newPercent > 100) {
            newPercent = 100;
        }
        setPercent(newPercent);
    };
    const decline = () => {
        let newPercent = percent - 10;
        if (newPercent < 0) {
            newPercent = 0;
        }
        setPercent(newPercent);
    };
    return (
        <>
            <Button className='modalButton' onClick={showModal}>
                Update
            </Button>
            <Modal open={isModalOpen} onCancel={handleCancel} className="responseUpdateModal">
                <p className='responseModalText'>Update Similar Records</p>
                <div className="progressbar">
                    <Button onClick={decline} icon={<MinusOutlined />} className='buttonprogressbarminus' />
                    <Progress percent={percent} />
                    <Button onClick={increase} icon={<PlusOutlined />} className='buttonprogressbarplus'/>
                </div>
                <ConfrimPrompt />
            </Modal>
        </>
    )
}

export default Index