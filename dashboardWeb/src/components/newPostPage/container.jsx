import React, { useState } from 'react';
import Presenter from './presenter';
import axios from 'axios';


const Container = (props) => {
    const { history } = props;


    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    // const [registerAt, setRegistserAt] = useState({now})

    const registerAt = new Date();


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