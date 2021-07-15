import axios from 'axios';
import React from 'react';

const App = (props) => {
    const click = () => {
        axios.get("http://localhost:8080/user")
            .then(rs => {
                console.log(rs.data);
                alert(rs.data[0].name)

            })
            .catch(err => {
                console.log(err);


            })

    }


    return (
        <div>
            app
            <button onClick={click}>
                s
            </button>
        </div>

    );
}

export default App;