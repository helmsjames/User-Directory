import React, {Component} from "react";
import "./table.css";
import Row from "../Rows";
import getUsers from "../../Api";
import axios from 'axios';
// import getUsers from "../../Api";

// grabbing the Table data
class Table extends Component  {
    constructor(props) {
        super(props)
        this.state = {users: []};

    }
    // api call to axios to return employee data
    componentDidMount() {
        console.log('get users')
        return axios.get("https://randomuser.me/api/?results=20&nat=us")
        .then((res) => {    
            this.setState({users: res.data.results})
            // one user: res.data.results[0]
        })
        .catch(function(error){
          console.log('error', error);
        });
    }
    render() {

    return (
        <table>            
            <Row users={this.state.users}/>
        </table>

    )

}
}


export default Table;