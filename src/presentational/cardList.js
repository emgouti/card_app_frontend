import React from 'react';
import CardDetails from './cardDetails';
import { connect } from "react-redux";
import { fetchTiles, addTile, addCard, deleteCard, getInput, fetchTotalCards } from "../actions/tilesActions";
import LocationBadge from './locationBadge';
import HeaderBadge from './headerBadge';

// import ACTIONS

class CardList extends React.Component {
    componentDidMount(){
      this.props.dispatch(fetchTiles())
      this.totalCards()
    }

    addTile = () => {
    console.log('kjhakjhdakjdha',this.props)

      this.props.dispatch(addTile(this.props.input))
    }

    addCard = (el) => {
      this.props.dispatch(addCard(el))
    }

    deleteCard = (el) => {
      this.props.dispatch(deleteCard(el))
    }

    getInput = (e) => {
      e.preventDefault();
      this.props.dispatch(getInput(e.target.value))
    }

    totalCards = () => {
      this.props.dispatch(fetchTotalCards(this.props.tiles))
    }

    render() {

      const { tiles, input} = this.props;

      console.log('TOTAL in cardList', input)
  
      return (
        <div>
          <LocationBadge  addTile={this.addTile} getInput={this.getInput}/>
          <HeaderBadge total={tiles.length} totalCards={this.totalCards()} tot={this.props.total} />
          <CardDetails tot={this.props.total} deleteCard={this.deleteCard} addCard={this.addCard} tiles={tiles}  />
        </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
    tiles: state.tiles,
    error: state.error,
    input: state.input,
    total: state.total
  });
  
  export default connect(mapStateToProps)(CardList);