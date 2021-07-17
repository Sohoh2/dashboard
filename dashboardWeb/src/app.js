import axios from 'axios';
import React, { useEffect } from 'react';
import Router from './router';

const App = (props) => {
    const click = () => {
        axios.get("http://localhost:8080/users")
            .then(rs => {
                console.log(rs.data);
                // alert(rs.data[0].name)

            })
            .catch(err => {
                console.log(err);


            })

    }


    return (
        <div>
            <Router />
        </div>

    );
}

export default App;