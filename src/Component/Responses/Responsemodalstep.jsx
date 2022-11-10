import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Steps,Modal,Button } from 'antd';
import Createsubmissionstep1 from '../Submission/Createsubmissionstep1'
import Responsesmodalproperties from './Responsesmodalproperties';
import Responsesmodalsentences from './Responsesmodalsentences'
import Responsesmodalparagraph from './Responsesmodalparagraph'
import Responsesmodalsimilardocument from './Responsesmodalsimilardocument'
import Responsesmodalredactedparagraph from './Responsesmodalredactedparagraph'
import {AiOutlineFileAdd} from 'react-icons/ai'

const steps = [
    {
        icon:<AiOutlineFileAdd/>,
        title: 'Properties',
        content: <Responsesmodalproperties />,
    },
    {
        icon:<AiOutlineFileAdd/>,
        title: 'Sentences',
        content: <Responsesmodalsentences />,
    },
    {
        icon:<AiOutlineFileAdd/>,
        title: 'Paragraph',
        content: <Responsesmodalparagraph/>,
    },
    {
        icon:<AiOutlineFileAdd/>,
        title: 'Similar Document',
        content: <Responsesmodalsimilardocument />,
    },
    {
        icon:<AiOutlineFileAdd/>,
        title: 'Redacted Paragraph',
        content: <Responsesmodalredactedparagraph/>,
    },
]

const Responsemodalstep = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [current, setCurrent] = useState(0);
    const onChange = (value) => {
        setCurrent(value);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
        icon: item.icon
    }));
    return (
        <>
            <Button onClick={showModal} className='createButton'>
                Create Submisssion
            </Button>
            <Modal open={isModalOpen} onCancel={handleCancel} className='modalSubmission'>
            <Steps
                type="navigation"
                current={current}
                onChange={onChange}
                className="siteNavigationSteps"
                items={items}
            />
            <div className="stepsContent">{steps[current].content}</div>
        </Modal>
        </>
    )
}

export default Responsemodalstep