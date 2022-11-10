import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag } from 'antd';

const columns = [
    {
        title: 'Sentences',
        dataIndex: 'name',
        key: 'name',
        width: '70%',
        render: (text) =>
            <>
                <p>{text}</p>
            </>
    },
    {
        title: 'Sentiment',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag < 0) {
                        color = '#E5430F';
                    } else {
                        color = '#068A3C';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Reviewer Score',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag < 0) {
                        color = '#E5430F';
                    } else {
                        color = '#068A3C';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },


];
const data = [
    {
        key: '1',
        name: 'At the LEA level, 504 evaluation requests are steadily increasing, and there are still no federal dollars allocated to support states (districts) in managing this subjective, highly litigious area of education.',
        tags: ['-3.4'],
    },
];

const Responsesmodalparagraph = () => {
    return (
        <>
            <div className="responseModalParagraph"><Table columns={columns}
                dataSource={data} />
            </div>

        </>
    )
}

export default Responsesmodalparagraph
