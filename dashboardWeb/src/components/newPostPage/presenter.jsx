import React, { useEffect, useState } from 'react';
import Container from '../../common/util/container';
import Commonstyles from '../../common/css/common.module.css';
import { PageHeader, Table, Tag, Space, Button,  Form, Input, } from 'antd';
import axios from 'axios';

const Presenter = (props) => {
    return (
        <>
            <Container>
                <PageHeader
                    className="site-page-header"
                    title="New Post"
                />
                <PostForm {...props}/>
            </Container>
        </>
    );
};

export default Presenter;

const PostForm = (props) => { 
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <>
            <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>


        </>
    );
};
