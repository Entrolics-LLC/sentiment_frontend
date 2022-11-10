import React from 'react';
import { Card, Col, Row, Checkbox, Button, Pagination } from 'antd';

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
};

const Responsesmodalsimilardocument = () => {
    return (
        <>
            <div className="responseSimilarDocuments">
                <div className="responseSimilarDocumentLeft">
                    <div className="similarDocumentCards">
                        <Row gutter={16}>
                            <Col span={6}>
                                <Card title="Similar Document" bordered={false}>
                                    ED-2021-SCC-0158-0878
                                    <br />
                                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Similar Document" bordered={false}>
                                    ED-2021-SCC-0158-0878
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Similar Document" bordered={false}>
                                    ED-2021-SCC-0158-0878
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Similar Document" bordered={false}>
                                    ED-2021-SCC-0158-0878
                                </Card>
                            </Col>
                        </Row>

                    </div>
                    <div className="similarDocumentCards">
                        <Row gutter={16}>
                            <Col span={6}>
                                <Card title="Similar Document" bordered={false}>
                                    ED-2021-SCC-0158-0878
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Similar Document" bordered={false}>
                                    ED-2021-SCC-0158-0878
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Similar Document" bordered={false}>
                                    ED-2021-SCC-0158-0878
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Similar Document" bordered={false}>
                                    ED-2021-SCC-0158-0878
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <Pagination
                        showSizeChanger
                        onShowSizeChange={onShowSizeChange}
                        defaultCurrent={1}
                        total={100}
                    />
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