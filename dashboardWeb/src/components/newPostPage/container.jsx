import React, { useState } from 'react';
import Presenter from './presenter';
import axios from 'axios';


const Container = (props) => {

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');


    const newPostBtn = () =>{

        const insertData = {
            title: `${title}`,
            content: `${contents}`,
        };

        
        axios.post("http://localhost:8080/board", insertData)
        .then(rs => {
            console.log(rs);
        })
        .catch(err => {
            console.log(err);            
        })

    }



    return(
        <Presenter {...props} 
        newPostBtn={newPostBtn} 
  
        />

            
    )};

export default Container;