import React, { useState, useEffect } from 'react';
import Presenter from './presenter';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { spliteDateNTime } from '../../common/function/dateFunctions';


const Container = (props) => {
  const { history } = props;
  const { seq } = useParams();
  const [mode, setMode] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  // CREATE
  const newPostBtn = () => {
    const currDate = new Date();
    currDate.setHours(currDate.getHours() + 9)
    console.log(`${spliteDateNTime(currDate.toISOString()).date} ${spliteDateNTime(currDate.toISOString()).time}`)


    const insertData = {
      title: `${title}`,
      content: `${contents}`,
      register_at: `${spliteDateNTime(currDate.toISOString()).date} ${spliteDateNTime(currDate.toISOString()).time}`
    };

    axios
      .post('http://localhost:8080/board', insertData)
      .then((rs) => {
        console.log(rs);
      })
      .catch((err) => {
        console.log(err);
      });
    alert('게시글이 등록되었습니다.');
    history.push('/main');
  };

  //Select

  const selectPost = () => {
    axios
      .get(`http://localhost:8080/board/${seq}`)
      .then((rs) => {
        setTitle(rs.data[0].title);
        setContents(rs.data[0].content);
        console.log('=>', rs.data.title);
        console.log('seqqqqqqq', seq);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //UPDATE
  const modifyPost = () => {
    const currDate = new Date();
    currDate.setHours(currDate.getHours() + 9)
    console.log(`${spliteDateNTime(currDate.toISOString()).date} ${spliteDateNTime(currDate.toISOString()).time}`)


    axios
      .put('http://localhost:8080/board', {
        seq,
        title,
        contents,
        update_at: `${spliteDateNTime(currDate.toISOString()).date} ${spliteDateNTime(currDate.toISOString()).time}`
      })
      .then((rs) => {
        alert('게시글이 수정되었습니다.');
        history.push('/board');
        selectPost();
        setMode('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   DELETE
  const deletePost = () => {
    axios.delete(`http://localhost:8080/board/${seq}`)
        .then((rs) => {
        alert('게시글이 삭제되었습니다.');
        history.push('/board');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    selectPost();
  }, []);

  return (
    <Presenter
      {...props}
      newPostBtn={newPostBtn}
      title={title}
      setTitle={setTitle}
      contents={contents}
      setContents={setContents}
      deletePost={deletePost}
      modifyPost={modifyPost}
    />
  );
};

export default Container;
