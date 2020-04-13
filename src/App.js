import React, {Component} from 'react';
import Header from './Components/Header';
import SearchBar from "./Components/SearchBar";
import Table from "./Components/Table";
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <SearchBar/>
      <Table/>
      </div>
    );
  }

}

export default App;
