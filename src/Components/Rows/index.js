import React, {useState} from "react";
import "./rows.css";
import moment from "moment";

function Rows(props) {
    const [isSorted, setIsSorted] = useState(false);
    const [sortAscending, setSortAscending] = useState(false);
    let originalArray = props.users;
    let rows, sortedUsersArray;
    let sortArrow, sortText;
    if (!sortAscending) {
        sortArrow = "fas fa-sort-up";
        sortText = 'Sort Ascending';
    } else if (sortAscending) {
        sortArrow = "fas fa-sort-down";
        sortText = 'Sort Descending';
    }

    function returnAscending(a, b) {
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

    function returnDescending(a, b) {
        const nameA = a.name.last.toUpperCase();
        const nameB = b.name.last.toUpperCase();
    
        let comparison = 0;
        if (nameA > nameB) {
        comparison = -1;
        } else if (nameA < nameB) {
        comparison = 1;
        }
        return comparison;
    };

    const handleSort = () => {
        setIsSorted(true);
        setSortAscending(!sortAscending);
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
            if (sortAscending) {
                sortedUsersArray =  props.users.sort(returnAscending);
            } else if (!sortAscending) {
                sortedUsersArray =  props.users.sort(returnDescending);
            }
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
                <th >Name
                    <button onClick={handleSort}>
                        <i class={sortArrow}size="5px">
                            {sortText}
                        </i>
                    </button>
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