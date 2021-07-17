import React, { useState } from 'react';
import Container from '../../common/util/container';
import Commonstyles from '../../common/css/common.module.css';
import { PageHeader, Table, Tag, Space } from 'antd';


const Presenter = (props) => {
    return (
        <>
            <Container>
                <PageHeader
                    className="site-page-header"
                    title="Get support"
                    subTitle="24 hours a day, 7 days a week."
                />
                <div>
                    

                </div>
                    <List/>
            </Container>
        </>
    );
};

export default Presenter;


const Buttons = (props) => {

    return (
        <div>
 
        </div>
    );
};

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
          updatedAt:'021-7-18'
        },
        {
          key: '2',
          seq:'2',
          title: 'Jim Green',
          registerAt: '2021-7-17',
          updatedAt:'021-7-18'
        },
        {
          key: '3',
          seq:'3',
          title: 'Joe Black',
          registerAt: '2021-7-17',
          updatedAt:'021-7-18'

        },
      ];
      

    return (
        <>
        <Table columns={columns} dataSource={data} />


        </>
    );
};
