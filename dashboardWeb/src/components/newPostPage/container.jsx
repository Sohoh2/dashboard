import React, { useState, useEffect } from 'react';
import Presenter from './presenter';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Container = (props) => {
    const { history } = props;
    const { seq } = useParams();



    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    // const [registerAt, setRegistserAt] = useState({now})

    const registerAt = new Date();




    // Update
    const newPostBtn = () =>{

        const insertData = {
            title: `${title}`,
            content: `${contents}`,
            registerAt : `${registerAt}`
        };
        
        axios.post("http://localhost:8080/board", insertData)
        .then(rs => {
            console.log(rs);
        })
        .catch(err => {
            console.log(err);            
        })
        history.push('/main')
    }

    //Select

    const selectPost = () => {
        axios.get(`http://localhost:8080/board/${seq}`)
        .then(rs =>{
              setTitle(rs.data.title);
              setContents(rs.data.content);
              console.log('=>',rs.data.title)
              console.log('seqqqqqqq',seq);

        }) 
         .catch (err => {
          console.log(err);
        })
      }
    
        useEffect(() => {
                selectPost();
            
        },[])
    




    return(
        <Presenter {...props} 
        newPostBtn={newPostBtn}
        title = {title}
        setTitle = {setTitle} 
        contents = {contents}
        setContents = {setContents}
        />

            
    )};

export default Container;