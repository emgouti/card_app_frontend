import React from 'react';
import { Card, Button, Row, Col } from 'reactstrap';
import './cardDetails.css'

const cardDetails = (props) => {
  console.log('PROPS in cardDetails',props)

  return (
      <div className="body"> <br/>
       
      <h3>Markets</h3>
        <div className='flexcontainer'>
          <Row>
          {props.tiles.map(el => (
          <Col sm="6">
            <Card body>
            <div>
            <h9>Market ID: </h9> <h9>{(props.tiles.indexOf(el) + 1)}</h9>
            </div>
            <div>
            <h9>Location: </h9> <h9>{el.location}</h9>
            </div>
            <div>
            <h9>Cards: </h9> <h9>{el.cards}</h9>
            </div>
            <div>
            <h9>% of total: </h9> <h9>{Math.round((el.cards/props.tot)*100)} %</h9>
            <div>
              <Button onClick={() => props.addCard(el)} size="sm" style={{ backgroundColor: "grey"}}>Add Card</Button>  <Button onClick={() => props.deleteCard(el)} size="sm" style={{ backgroundColor: "grey"}}>Delete Card</Button>
              </div>
              </div>
            </Card>
          </Col>
           ))}
        </Row>
        </div>

     
    </div>
  );
};

export default cardDetails;