import React from 'react';
import CardDetails from './cardDetails';
import { connect } from "react-redux";
import { fetchTiles, addTile, addCard, deleteCard, getInput, fetchTotalCards } from "../actions/tilesActions";
import LocationBadge from './locationBadge';
import HeaderBadge from './headerBadge';

// import ACTIONS

class CardList extends React.Component {
  
    componentDidMount(){
      this.props.fetchTiles();
      console.log('PROPSOPSODP',this.props)
      // console.log('PROPSOPSODP',this.state)

    }


    render() {

      const { tiles, total, addTile, deleteCard, addCard} = this.props;

      console.log('PROPS!!!! in cardList', this.props)
  
      return (
        <div>
          <LocationBadge  addTile={addTile} getInput={this.props.getInput}/>
          <HeaderBadge total={tiles.length} tot={total} />
          <CardDetails tot={total} deleteCard={deleteCard} addCard={addCard} tiles={tiles}  />
        </div>
      );
    }
  };

  const mapDispatchToProps = dispatch => ({
    fetchTiles: () => {
      dispatch(fetchTiles())
    },
    addTile: () => {
      dispatch(addTile())
    },
    addCard: (el, i) => {
      dispatch(addCard(el, i))
    },
    deleteCard: (el, i) => {
      dispatch(deleteCard(el, i))
    },
    getInput: (e) => {
      dispatch(getInput(e.target.value))
    },
    fetchTotalCards: () => {
      dispatch(fetchTotalCards(this.props.tiles))
    }
  });
  
  const mapStateToProps = state => ({
    tiles: state.tiles,
    error: state.error,
    input: state.input,
    total: state.total
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CardList);