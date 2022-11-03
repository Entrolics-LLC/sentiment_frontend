// import { Button, Modal } from 'antd';
// import React, { useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';

// import {

//   Cascader,
//   DatePicker,
//   Form,
//   Input,
//   InputNumber,
//   Radio,
//   Select,
//   Switch,
//   TreeSelect,
// } from 'antd';

// const items = [
//   {
//     title: 'Finished',
//     description,
//   },
//   {
//     title: 'In Progress',
//     description,
//   },
//   {
//     title: 'Waiting',
//     description,
//   },
// ];
// const { RangePicker } = DatePicker;
// const { TextArea } = Input;

// const Createsubmissionstep1 = () => {

//   const [componentSize, setComponentSize] = useState('default');
//   const onFormLayoutChange = ({ size }) => {
//     setComponentSize(size);
//   };
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   return (

//     <>

//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>

//       <Modal title="Basic Modal"
//         open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={900}>

// <Steps current={1} labelPlacement="vertical" items={items} />
//     <br />
//     <Steps current={1} percent={60} labelPlacement="vertical" items={items} />
//     <br />
//     <Steps current={1} size="small" labelPlacement="vertical" items={items} />
//         <p>
//           <Form
//             labelCol={{
//               span: 4,
//             }}
//             wrapperCol={{
//               span: 14,
//             }}
//             layout="horizontal"
//             initialValues={{
//               size: componentSize,
//             }}
//             onValuesChange={onFormLayoutChange}
//             size={componentSize}
//           >

//             <Form.Item label="Name">
//               <Input placeholder='Title IX Survey' />
//             </Form.Item>
//             <Form.Item label="Government Agency">
//               <Select placeholder='Department of Education' >
//                 <Select.Option value="demo">Demo</Select.Option>
//               </Select>
//             </Form.Item>
//             <Form.Item label="Organization">
//               <Input placeholder='Survey Org' />
//             </Form.Item>

//             <Form.Item label="File Location">
//               <DatePicker />
//             </Form.Item>
//             <Form.Item label="Document ID">
//               <InputNumber placeholder='ED-2015' />
//             </Form.Item>
//             <Form.Item label="Select Column">
//               <Select placeholder="Document_ID">
//                 <Select.Option value="demo">Demo</Select.Option>
//               </Select>
//             </Form.Item>
//             <Form.Item label="Comment Column">
//               <Select placeholder="Comment">
//                 <Select.Option value="demo">Demo</Select.Option>
//               </Select>
//             </Form.Item>

//             <Button>Back</Button>
//             <Button>Next</Button>
//           </Form>


//         </p>
//         {/* <p>Some contents...</p> */}
//         {/* <p>Some contents...</p> */}
//       </Modal>
//     </>
//   )
// }

// export default Createsubmissionstep1