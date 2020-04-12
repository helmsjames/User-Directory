import React, {useState} from "react";
import "./rows.css";
import moment from "moment";

function Rows(props) {
    const [isSorted, setIsSorted] = useState(false);
    let originalArray = props.users;
    let rows, sortedUsersArray;

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

    const handleSort = () => {
        setIsSorted(true);
    };

    console.log('originalArray.length > 0', props.users.length > 0);
    console.log('!isSorted', !isSorted);

    if (props.users.length > 0 && !isSorted) {
        console.log('use original array')
            rows = originalArray.map((user) => 
                <tr>
                    <td><img src={user.picture.medium} /></td>
                    <td>{`${user.name.first} ${user.name.last}`}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{moment(user.dob.date).format('MM/DD/YYYY')}</td>
                </tr>
            )
        } else if (props.users.length > 0 && isSorted) {
            sortedUsersArray =  props.users.sort(compare);
            rows = sortedUsersArray.map((user) => 
            <tr>
                <td><img src={user.picture.medium} /></td>
                <td>{`${user.name.first} ${user.name.last}`}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{moment(user.dob.date).format('MM/DD/YYYY')}</td>
            </tr>
            )
        };

    return (
        <div>
            <tr>
                <th>Image</th>
                <th>
                    <button onClick={handleSort}>Name</button>
                    <i class="fas fa-sort" size="5px"></i>                   
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
