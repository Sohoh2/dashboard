import React, { useState } from 'react';
import Container from '../../common/util/container';
import Commonstyles from '../../common/css/common.module.css';
import { Row, Col, Divider, Table, Button, Radio, Select, Input, Form, Mentions, DatePicker } from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined, CloseOutlined, CheckOutlined, ArrowUpOutlined } from '@ant-design/icons';


const Presenter = (props) => {
    return (
        <>
            <Container>
                <div className={Commonstyles.title}>고객주문등록</div>
                <Row span={18} gutter={10}>
                    <Col span={9}>
                        <List {...props} />
                    </Col>

                    <Col span={9}>
                        <Buttons {...props} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Presenter;


const Buttons = (props) => {

    return (
        <div>
            <Row justify="end" gutter={10}>
                <Col>
                    <Button type="primary" shape="round" icon={<ArrowUpOutlined />} >
                        업로드양식
                    </Button>
                </Col>
                <Col>
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} >
                        엑셀업로드
                    </Button>
                </Col>
                <Col>
                    <Button type="primary" shape="round" icon={<CloseOutlined />} >
                        발주취소
                    </Button>
                </Col>
                <Col >
                    <Button type="primary" shape="round" icon={<CheckOutlined />} >
                        발주확정
                    </Button>
                </Col>
            </Row>
        </div>
    );
};


const List = (props) => {
    const columns = [
        {
            title: '모델',
            dataIndex: 'name',
        },
        {
            title: '제품타입',
            dataIndex: 'chinese',
            sorter: {
                compare: (a, b) => a.chinese - b.chinese,
                multiple: 3,
            },
        },
        {
            title: '발주수량',
            dataIndex: 'math',
            sorter: {
                compare: (a, b) => a.math - b.math,
                multiple: 2,
            },
        },
        {
            title: '비고',
            dataIndex: 'english',
            sorter: {
                compare: (a, b) => a.english - b.english,
                multiple: 1,
            },
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            chinese: 98,
            math: 60,
            english: 70,
        },
        {
            key: '2',
            name: 'Jim Green',
            chinese: 98,
            math: 66,
            english: 89,
        },
        {
            key: '3',
            name: 'Joe Black',
            chinese: 98,
            math: 90,
            english: 70,
        },
        {
            key: '4',
            name: 'Jim Red',
            chinese: 88,
            math: 99,
            english: 89,
        },
    ];
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    return (
        <div>
            <Divider orientation="left">2. 발주상세정보</Divider>
            <Row justify="end" style={{ marginBottom: '20px' }}>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} >
                    발주확정
                </Button>
            </Row>
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    );
};
