import React, {useState} from "react";
import "./rows.css";
import moment from "moment";

function Rows(props) {
let usersArray = props.users;
let rows;
function compare(a, b) {
    const nameA = a.name.last.toUpperCase();
    const nameB = b.name.last.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

const sort = () => {
    usersArray = props.users.sort(compare);
    console.log('users array inside sort', usersArray);
    rows = usersArray.map((user) => 
    <tr>
        <td><img src={user.picture.medium} /></td>
        <td>{`${user.name.first} ${user.name.last}`}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{moment(user.dob.date).format('MM/DD/YYYY')}</td>
    </tr>
)

}
    if (props.users.length > 0 ) {
            rows = usersArray.map((user) => 
                <tr>
                    <td><img src={user.picture.medium} /></td>
                    <td>{`${user.name.first} ${user.name.last}`}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{moment(user.dob.date).format('MM/DD/YYYY')}</td>
                </tr>
            )
        }

        console.log('users array OUTSIDE sort', usersArray);


    return (
        <div>
            <tr>
                <th>Image</th>
                <th>
                    <button onClick={sort}>Name</button>
                </th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
            {rows}
        </div>
    )
}

export default Rows;