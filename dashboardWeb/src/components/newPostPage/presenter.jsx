import React, { useEffect, useState } from 'react';
import Container from '../../common/util/container';
import Commonstyles from '../../common/css/common.module.css';
import { PageHeader, Table, Tag, Space, Button, Form, Input, Row } from 'antd';
import axios from 'axios';

const Presenter = (props) => {
  return (
    <>
      <Container>
        <PageHeader className="site-page-header" title="New Post" />
        <PostForm {...props} />
      </Container>
    </>
  );
};

export default Presenter;

const PostForm = (props) => {

    const {newPostBtn, title, setTitle, contents, setContents} = props
    const formRef = React.useRef();


    console.log('컨텐츠????',contents);
    console.log(title)

  useEffect(() => {
    formRef.current.setFieldsValue({
      title,
      contents
    });
  })

  return (
    <>
      <Form
        ref={formRef}
        name="basic"
        labelCol={{
          span: 8,
        }}
      >
        <Row justify="center" >
        <Form.Item
          labelAlign='left'
          name="title"
          rules={[
            {
              required: true,
              message: 'Please input title!',
            },
          ]}
        >
          <Input
            style={{
            width:'40rem',
              height: '3rem',
              fontSize: '1.2rem',
            }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>
        </Row>
        <Row justify='center'>

        <Form.Item
        labelAlign='left'
          name="contents"
          rules={[
            {
              required: true,
              message: 'Please input contents',
            },
          ]}
        >
          <Input.TextArea 
          style={{
            height: '20rem',
            width:'40rem',
            fontSize: '1.2rem' }} 
            onChange={(e) => setContents(e.target.value)}

            />
        </Form.Item>
        </Row>
        <Row justify='center'>

        <Form.Item
            >
          <Button 
          type="primary"
            htmlType="submit"
            onClick={newPostBtn}>
            New Post
          </Button>
        </Form.Item>
        </Row>
      </Form>
    </>
  );
};