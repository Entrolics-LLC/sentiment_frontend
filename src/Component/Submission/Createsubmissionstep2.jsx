import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import { Form, Input, Select } from 'antd';

const Createsubmissionstep2 = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <div className='submissionStepTwo'>
        <Form
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          size={componentSize}
        >

          <Form.Item label="Annonymize Data">
            <Switch {...label} />
          </Form.Item>
          <Form.Item label="Perform Sentiment Analysis" >
            <Switch {...label} defaultChecked />
          </Form.Item>
          <Form.Item label="Entity Extraction">
            <Switch {...label} />
          </Form.Item>

          <Form.Item label="Topic Recommendations">
            <Switch {...label} />
          </Form.Item>
          <Form.Item label="Issue Area Recommentations">
            <Switch {...label} />
          </Form.Item>
          <Form.Item label="Simlarity 1-100">
          </Form.Item>
        </Form>
      </div>

    </>
  )
}

export default Createsubmissionstep2