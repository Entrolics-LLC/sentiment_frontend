import React from 'react';
import { Card, Col, Row, Checkbox, Button, Pagination } from 'antd';

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
};
const data = [
    {
        content: 'ED-2021-SCC-0158-0878',
        text: '93 % Match'
    },
    {
        content: 'ED-2021-SCC-0158-0878',
        text: '93 % Match'
    },
    {
        content: 'ED-2021-SCC-0158-0878',
        text: '93 % Match'
    },
    {
        content: 'ED-2021-SCC-0158-0878',
        text: '93 % Match'
    },
]
const Responsesmodalsimilardocument = () => {
    return (
        <>
            <div className="responseSimilarDocuments">
                <div className="responseSimilarDocumentLeft">
                    <div className="similarDocumentCards">
                        <Row gutter={16}>
                            {data?.map((cardData) => {
                                return (<Col span={6}>
                                    <Card title="Similar Document" >
                                        {cardData?.content}
                                        <br />
                                        <span className='responseCheckBox'>{cardData?.text}</span>
                                        <Checkbox onChange={onChange} />
                                    </Card>
                                </Col>)
                            })}
                        </Row>
                    </div>
                    <div className="similarDocumentCards">
                        <Row gutter={16}>
                            {data?.map((cardData) => {
                                return (<Col span={6}>
                                    <Card title="Similar Document" >
                                        {cardData?.content}
                                        <br />
                                        <span className='responseCheckBox'>{cardData?.text}</span>
                                        <Checkbox onChange={onChange} />
                                    </Card>
                                </Col>)
                            })}
                        </Row>
                    </div>
                    <div className="similarDocumentCards">
                        <Row gutter={16}>
                            {data?.map((cardData) => {
                                return (<Col span={6}>
                                    <Card title="Similar Document" >
                                        {cardData?.content}
                                        <br />
                                        <span className='responseCheckBox'>{cardData?.text}</span>
                                        <Checkbox onChange={onChange} />
                                    </Card>
                                </Col>)
                            })}
                        </Row>
                    </div>
                    <div className='responsePagination'>
                        <Pagination
                            showSizeChanger
                            onShowSizeChange={onShowSizeChange}
                            defaultCurrent={1}
                            total={100}
                        />
                    </div>
                </div>
                <div className="responseSimilarDocumentRight">
                    <Button className="modalButton">
                        Compare
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Responsesmodalsimilardocument