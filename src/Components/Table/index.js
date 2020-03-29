import React, {Component} from "react";
import {connect} from 'react-redux';
import "./table.css";
import Row from "../row";
import mockUsers from '../mock-data';
// import getUsers from "../../Api";

class Table extends Component {
    render() {
 
    return (
        <div>
            <Row users={this.props.users}/>
        </div>

    )


}
}

const mapStateToProps = (state) => {
    return {
        users: state.toDoReducer[0]
    }
}

export default connect(mapStateToProps)(Table)