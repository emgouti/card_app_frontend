import {
    FETCH_TILES,
    FETCH_TILES_FAILURE,
    GET_INPUT,
    TOTAL_CARDS,
    CATCH_ERROR,
    ADD_CARD,
    DELETE_CARD,
    ADD_TILE
  } from '../constants';
import axios from 'axios'
  
  const initialState = {
    tile: {id: 0,
            location: '',
            cards: 0},
    tiles: [],
    input: '',
    total: 0
  };

//   IMPORT ACTION TYPES

  export default function tilesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TILES:
        console.log('FETCHING', state)
       
        return {
            ...state
        };
        case ADD_CARD:
        console.log('HIT ADD CARD', action)
        state.tiles[action.payload.i].cards += 1;
        return {
            ...state,
            tiles: [...state.tiles],
            total: state.total + 1
        };
        case DELETE_CARD:
        let total = state.total
        console.log('HIT ADD CARD', action)
        if(state.tiles[action.payload.i].cards > 0) {
        state.tiles[action.payload.i].cards -= 1;
        total = total - 1
        }
        return {
            ...state,
            tiles: [...state.tiles],
            total: total
        }
        case CATCH_ERROR:
        console.log("CATCH ERROR", action)
        return {
            ...state,
            error: action.payload.error
        }
        case GET_INPUT:
        console.log('input', action)
        return {
            ...state,
            input: action.payload.input        }
        case TOTAL_CARDS:
        console.log('total', action)
        let tot = 0;
        
        action.payload.total.map(el => {
            tot += el.cards
        })

            return {
            ...state,
            total: tot
            };
        case ADD_TILE:
        console.log('STSTSTS',state.input)
        let c;
        if(!(state.tiles.includes(el => el.location === state.input))) 
        c = 1;
        let obj = {id: state.tile.id + 1,
            location: state.input,
            cards: c}
            return {
                ...state,
                tile: obj,
                tiles: [ ...state.tiles, obj],
            total: state.total + 1

            }
        default:
            return state;
    }
  }
