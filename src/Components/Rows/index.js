import React, {useState} from "react";
import {connect} from 'react-redux';
import "./rows.css";
import moment from "moment";

function Rows(props) {
    const [isSorted, setIsSorted] = useState(false);
    const [sortAscending, setSortAscending] = useState(false);
    let searchTerm = props.searchTerm;
    let originalArray = props.users;
    let rows, sortedUsersArray;
    let sortArrow, sortText;
    let searchedArray = [];
    if (!sortAscending) {
        sortArrow = "fas fa-sort-up";
        // sortText = 'Sort Ascending';
    } else if (sortAscending) {
        sortArrow = "fas fa-sort-down";
        // sortText = 'Sort Descending';
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

    function handleSearch() {
        originalArray.map((user) => {
        let userName = user.name.last.toUpperCase().trim();
        let formattedSearchTerm = searchTerm.toUpperCase().trim();
            if (userName === formattedSearchTerm) {
                searchedArray.push(user)
            }
        })
        console.log('searchedArray', searchedArray);
    };
    
handleSearch();

    if (props.users.length > 0 && !isSorted && !searchTerm) {
            rows = originalArray.map((user) => 
                <tr>
                    <td><img src={user.picture.medium} /></td>
                    <td>{`${user.name.first} ${user.name.last}`}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{moment(user.dob.date).format('MM/DD/YYYY')}</td>
                </tr>
            )
        } else if (props.users.length > 0 && isSorted && !searchTerm) {
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
        } else if (searchedArray.length > 0) {
            rows = searchedArray.map((user) => 
                <tr>
                    <td><img src={user.picture.medium} /></td>
                    <td>{`${user.name.first} ${user.name.last}`}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{moment(user.dob.date).format('MM/DD/YYYY')}</td>
                </tr>
            )
        }

    return (
        <table>
            <tr>
                <th>Image</th>
                <th >Name                    
                        <i class={sortArrow} onClick={handleSort}>
                            {/* {sortText} */}
                        </i>                    
                </th>         
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
            {rows}
        </table>
    )
}


function mapStateToProps(state) {
    return { searchTerm: state.searchTerm }
  }

export default connect(mapStateToProps)(Rows)