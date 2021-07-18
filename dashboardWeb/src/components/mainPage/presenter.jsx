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
                <List  {...props}/>
            </Container>
        </>
    );
};

export default Presenter;

const List = (props) => {

    const {list} = props    
    const columns = [
        {
          title: 'SEQ',
          dataIndex: 'seq',
          width: 30,

        },

        {
          title: 'TITLE',
          dataIndex: 'title',
        },

        {
          title: 'REDISTER AT',
          dataIndex: 'registerAt',
          width: 120,
        },
        {
            title: 'UPDATED AT',
            dataIndex: 'updatedAt',
            width: 120,
          },
      ];


      const data = [];

      {list.map((li,idx) =>
        data.push({
            seq:`${li.seq}`,
            title: `${li.title}`,
            // title: `${<Link to={`/board/${li.seq}`}>{li.title}</Link>}`,
            registerAt: `${li.register_at}`,
            updatedAt:`${li.update_at}`
        }))
    }
        
        
     

    

    return (
        <>
        <div className={Commonstyles.PositionRight}>
        <Link to='./newPost/:seq'>
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
