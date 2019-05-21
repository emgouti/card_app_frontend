import React from 'react';
import { Button } from 'reactstrap';
import './header.css'

let input = '';
export default class Example extends React.Component {

  render() {
    console.log(input)
    return (
      <div className="body"> <br/>
        <h5>Create New Market</h5>
        <div>
        <h5>Location: <input onChange={this.props.getInput}></input>    <Button onClick={this.props.addTile} size="sm" style={{ backgroundColor: "grey"}}>Add Market</Button></h5>
        </div>
        

      </div>
    );
  }
}