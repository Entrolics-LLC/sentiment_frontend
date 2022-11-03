import React, { useState } from 'react'
import { Button, message, Steps, Divider } from 'antd';
import 'antd/dist/antd.css';

const steps = [
    {
        title: 'Step 1',
        content: 'content',
    },
    {
        title: 'Step 2',
        content: 'Second-content',
    },
];

const Createsubmissionstep2 = () => {
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
            <Steps current={current} items={items} />
            <Divider />
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{
                        margin: '0 8px',
                    }}
                        onClick={() => prev()}
                    >
                        Back
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Your Job has been submitted and Processing')}>
                        Submit
                    </Button>
                )}

            </div>
        </>
    )
}

export default Createsubmissionstep2