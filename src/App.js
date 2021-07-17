import Logo from './components/Logo.js';
import CardList from "./components/cardList"
import SearchBar from './components/Searchbar.js'
import {Component} from 'react'
import Scroll from './components/Scroll'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row } from 'react-bootstrap';

import { Col } from 'react-bootstrap';


class App extends  Component{
  constructor(){
    super()
    this.state = {
      robolist : [],
      search : ''
    }
  }
  Searching = (event) => {
    let val = event.target.value;

    this.setState({
      search : val,
    }
    )  
    
    
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState(({robolist:users})))
}

  render() {
    const filtered = this.state.robolist.filter((robot) => {
      return(robot.name.toLowerCase().includes(this.state.search.toLowerCase()))
    })
  return (
    <div className = "tc">
       <Row style={{textAlign:"center", marginTop:"20px"}}>
    <Col className = "tl"><Logo side = "left"/> </Col>
    <Col  className = "tc"><h2 style = {{color:'#61DBFB'}}>Search Robots</h2></Col>
    <Col className = "tr"><Logo side = "right"/> </Col>
    
  </Row>

  <SearchBar seatchfield = {this.Searching}/>
  <Scroll>   
    <CardList robots = {filtered}/>
</Scroll>
  </div>
  );
}}

export default App;
