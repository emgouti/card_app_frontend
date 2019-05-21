import {
    FETCH_TILES_SUCCESS,
    FETCH_TILES_FAILURE,
    GET_INPUT,
    TOTAL_CARDS,
    CATCH_ERROR
  } from '../actions/tilesActions';
  
  const initialState = {
    tiles: [],
    error: null,
    input: '',
    total: 0
  };

//   IMPORT ACTION TYPES

  export default function tilesReducer(state = initialState, action) {
      console.log('state', state)
      console.log('ACTION in tileReducer', action)
    switch(action.type) {
        case FETCH_TILES_SUCCESS:
        console.log('action payload', action.payload)
        return {
            ...state,
            loading: false,
            tiles: action.payload.tiles
        };
        case FETCH_TILES_FAILURE: 
        console.log('ERROR', action)
        return {
            ...state,
            loading: false,
            error: action.payload.error
        };
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
            input: action.payload.input
        }
        case TOTAL_CARDS:
        console.log('total', action)
        let tot = 0;
        
        action.payload.total.map(el => {
            tot += el.cards
        })

            return {
            ...state,
            total: tot
            }

        default:
            return state;
    }
  }
