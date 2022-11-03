import React, { useState } from 'react';
import { Divider, Steps, message, Button, Modal } from 'antd';
import {
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
const { Step } = Steps;

const SubModal = () => {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
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


    // steps
    // const [current, setCurrent] = useState(3);
    // const onChange = (value) => {
    //     console.log('onChange:', current);
    //     setCurrent(value);
    // };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Create Submisssion
            </Button>
            
            <Modal open={isModalOpen} onCancel={handleCancel} width={900}>
                {/* <div className='modalBackground' >   */}
                 <Steps current={current} labelPlacement="vertical">
                    <Step   className='stepColor' title='Step 1'></Step>
                    <Step title='Step 2'></Step>
                </Steps>
                    <Divider />

                    <Form 
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        initialValues={{
                            size: componentSize,
                        }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                    >

                        <Form.Item label="Name" className='label' >
                            <Input placeholder='Title IX Survey' style={{background:'none'}} />
                        </Form.Item>
                        <Form.Item label="Government Agency" >
                            <Select placeholder='Department of Education' style={{background:'none'}} >
                                <Select.Option value="demo" >Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Organization">
                            <Input placeholder='Survey Org' style={{background:'none'}}/>
                        </Form.Item>

                        <Form.Item label="File Location">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="Document ID">
                            <InputNumber placeholder='ED-2015' style={{background:'none'}}/>
                        </Form.Item>
                        <Form.Item label="Select Column">
                            <Select placeholder="Document_ID">
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Comment Column">
                            <Select placeholder="Comment">
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                    </Form>
                    {/* <Button>
                        Next
                    </Button>
                    <Button>
                        Previous
                    </Button> */}
                    {/* {current < Step.length + 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === Step.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => prev()}
                        >
                            Previous
                        </Button>
                    )} */}

                {/* </div> */}
            </Modal>
          
        </>
    )
}

export default SubModal