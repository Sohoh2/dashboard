import React, { useEffect, useState } from 'react';
import Presenter from './presenter';
import axios from 'axios';


const Container = (props) => {
    const [list, setList] = useState([]);

        useEffect(()=>{
            axios.get("http://localhost:8080/boards")
            .then(rs => {
                console.log(rs);
                setList(rs.data);
                console.log('list' , list);
                console.log('list.title' , list.seq);
                console.log('list.title' , list.title);
                
            })
            .catch(err => {
                console.log(err);
                alert(err);
                
            })
        },[])
        
    return(

        <Presenter {...props} list={list}/>

            
    )};

export default Container;