import React, { useState } from 'react'
import { Form, Input, Select, Divider, Row, Col, Button } from 'antd';
import UpdateSimilarreacords from './Responsesmodalproperties(update similar records)'
import 'antd/dist/antd.css';

const Responsesmodalproperties = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  }
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log('Change:', e.target.value);
  }
  return (
    <>
      <Row>
        <Col span={12}><div className='responseModalProperties'>
          <Form
            labelCol={{
              span: 9,
            }}
            wrapperCol={{
              span: 15,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label="Document ID">
              <Input placeholder='Title IX Survey' />
            </Form.Item>
            <Form.Item label="Comment" >
              <Input placeholder='Title IX Survey' />
            </Form.Item>
            <Form.Item label="Agency ID">
              <Input placeholder='Survey Org' />
            </Form.Item>
            <Form.Item label="Docket ID">
              <Input placeholder='Survey Org' />
            </Form.Item>
            <Form.Item label="Tracking Number">
              <Input placeholder='Survey Org' />
            </Form.Item>
            <Form.Item label="Document Type">
              <Input placeholder='Survey Org' />
            </Form.Item>
            <Form.Item label="Posted Date">
              <Input placeholder='Survey Org' />
            </Form.Item>
            <Form.Item label="Is Withdrawn">
              <Input placeholder='Survey Org' />
            </Form.Item>
            <Form.Item label="Title">
              <Input placeholder='Survey Org' />
            </Form.Item>
            <Form.Item label="Allow Late Comments">
              <Input placeholder='Survey Org' />
            </Form.Item>
            <Form.Item label="Recieved Date">
              <Input placeholder='Survey Org' />
            </Form.Item>
          </Form>
          <span className='update'>Update Similar Records </span>
          <UpdateSimilarreacords />
        </div></Col>
        <Col style={{ height: "200px" }}>
          <Divider type="vertical" style={{ height: "500px", backgroundColor: 'white' }} />
        </Col>
        <Col span={11}><div className='responseModalProperties'>
          <Form
            labelCol={{
              span: 9,
            }}
            wrapperCol={{
              span: 15,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}>
            <Form.Item label="Reviewed">
              <Select placeholder="Comment">
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Issue Areas" >
              <Select placeholder="Access to Equal Education Opportunity">
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Similar Records">
              <Input placeholder='Less than 50k' />
            </Form.Item>
            <Form.Item label="Reviewer">
              <Input placeholder='Dennis Smith' />
            </Form.Item>
            <TextArea
            className='modalTextArea'
              onChange={onChange}
              placeholder='Notes'
            />
            <div className='modalPropertiesButton'>
            <Button className='propertiesButton'>Submit</Button>
            </div>
          </Form>
        </div>
        </Col>
      </Row>
    </>
  )
}

export default Responsesmodalproperties