import React from "react";
import "./row.css";


function Row(props) {

    var usersList;
    setTimeout(() => {

        usersList = props.users.map((user) => {
            return (
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>                
                </div>
            )
        })


    }, 5000)

    return (
        <div>
            {usersList}
        </div>
    )
   
}

export default Row;