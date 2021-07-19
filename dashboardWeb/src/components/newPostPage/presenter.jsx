import React, { useEffect, useState } from 'react';
import Container from '../../common/util/container';
import Commonstyles from '../../common/css/common.module.css';
import {
  PageHeader,
  Table,
  Tag,
  Space,
  Button,
  Form,
  Input,
  Row,
  Col,
} from 'antd';
import axios from 'axios';

const Presenter = (props) => {
  const { history } = props;
  return (
    <>
      <Container>
        <PageHeader
          onBack={() => history.push('/board')}
          className="site-page-header"
          title="New Post"
        />
        <PostForm {...props} />
      </Container>
    </>
  );
};

export default Presenter;

const PostForm = (props) => {
  const {
    newPostBtn,
    deletePost,
    modifyPost,
    title,
    setTitle,
    contents,
    setContents,
  } = props;
  const formRef = React.useRef();

  const [frstLoad, setFirstLoad] = useState(false);

  console.log('컨텐츠????', contents);
  console.log(title);

  useEffect(() => {
    formRef.current.setFieldsValue({
      title,
      contents,
    });
  });

  return (
    <>
      <Form
        ref={formRef}
        name="basic"
        labelCol={{
          span: 8,
        }}
      >
        <Row justify="center">
          <Form.Item
            labelAlign="left"
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
                width: '40rem',
                height: '3rem',
                fontSize: '1.2rem',
              }}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Item>
        </Row>
        <Row justify="center">
          <Form.Item
            labelAlign="left"
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
                width: '40rem',
                fontSize: '1.2rem',
              }}
              onChange={(e) => setContents(e.target.value)}
            />
          </Form.Item>
        </Row>
        <Form.Item>
          <Row justify="center" gutter={10}>
            {location.pathname === '/newPost/:seq' && (
              <Col>
                <Button type="primary" htmlType="submit" onClick={newPostBtn}>
                  NEW POST
                </Button>
              </Col>
            )}
            {location.pathname !== '/newPost/:seq' && (
              <Col>
                <Button type="primary" htmlType="submit" onClick={modifyPost}>
                  MODIFY
                </Button>
              </Col>
            )}
            {location.pathname !== '/newPost/:seq' && (
              <Col>
                <Button
                  type="primary"
                  danger
                  htmlType="submit"
                  onClick={deletePost}
                >
                  DELETE
                </Button>
              </Col>
            )}
          </Row>
        </Form.Item>
      </Form>
    </>
  );
};
