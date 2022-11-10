import React, { useState } from 'react'
import { Button, Modal } from 'antd';


const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className='stepsAction'>
        <Button className="modalButton" onClick={showModal}>
          Update
        </Button>
      </div>
      <Modal open={isModalOpen} onCancel={handleCancel} className='responseConfirmModal'>
        <p className='responseModalText'>100 records will be updated</p>
        <div className='stepsAction'>
          <Button className="modalButton">
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default Index