import React from 'react';
import { Badge } from 'reactstrap';
import './header.css'


export default class Example extends React.Component {
  render() {
    return (
      <div className="body"> <br/>
        <h5>Total Cards:  <Badge color="secondary">{this.props.tot}</Badge></h5>
        <h5>Total Markets:  <Badge color="secondary">{this.props.total}</Badge></h5>
      </div>
    );
  }
}