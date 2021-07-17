import React, { useEffect, useState } from 'react';
import Container from '../../common/util/container';
import Commonstyles from '../../common/css/common.module.css';
import { PageHeader, Table, Tag, Space, Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Presenter = (props) => {
    return (
        <>
            <Container>
                <PageHeader
                    className="site-page-header"
                    title="Get support"
                    subTitle="24 hours a day, 7 days a week."
                />
                <List/>
            </Container>
        </>
    );
};

export default Presenter;

const List = (props) => {

    const {list} = props
    // console.log(list)

    const [title,setTitle] = useState()
    
    const columns = [
        {
          title: 'SEQ',
          dataIndex: 'seq',
          key: 'seq',
          width: 30,

        },

        {
          title: 'TITLE',
          dataIndex: 'title',
          key: 'title',
        },

        {
          title: 'REDISTER AT',
          dataIndex: 'registerAt',
          key: 'registerAt',
          width: 120,
        },
        {
            title: 'UPDATED AT',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            width: 120,
          },
      ];


      const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: 'title',
    seq:'3',
    title: `${list}`,
    registerAt: `123`,
    updatedAt:'2021-7-18'
  });
}


    

    return (
        <>
        <div className={Commonstyles.PositionRight}>
        <Link to='./newPost'>
            <Button 
            type="primary"
            size='large'
            >
                New Post
            </Button>
            </Link>
        </div>
        <Table columns={columns} dataSource={data} />


        </>
    );
};
