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
      
      const data = [
        {
          key: '1',
          seq:'1',
          title: 'John Brown',
          registerAt: '2021-7-17',
          updatedAt:'2021-7-18'
        },
        {
          key: '2',
          seq:'2',
          title: 'Jim Green',
          registerAt: '2021-7-17',
          updatedAt:'2021-7-18'
        },
        {
          key: '3',
          seq:'3',
          title: 'Joe Black',
          registerAt: '2021-7-17',
          updatedAt:'2021-7-18'

        },
      ];

      useEffect(()=>{

        axios.get("http://localhost:8080/board")
        .then(rs => {
            console.log(rs.data);
            alert(rs.data);
        })
        .catch(err => {
            console.log(err);
            alert(err);
        })
    },[])
      

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
