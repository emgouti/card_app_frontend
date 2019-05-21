import {
  FETCH_TILES,
  FETCH_TILES_FAILURE,
  GET_INPUT,
  TOTAL_CARDS,
  CATCH_ERROR,
  DELETE_CARD,
  ADD_TILE,
  ADD_CARD
} from '../constants';


export const fetchTiles = () => ({
  type: FETCH_TILES
})

export const catchError = error => ({
  type: CATCH_ERROR,
  payload: { error }
})

export const fetchTilesSuccess = tiles => ({
  type: FETCH_TILES,
  payload: { tiles }
});

export const fetchTilesFailure = error => ({
  type: FETCH_TILES_FAILURE,
  payload: { error }
});

export const getInput = input => ({
  type: GET_INPUT,
  payload: { input }
});

export const addCard = (input, i) => ({
  type: ADD_CARD,
  payload: { input, i }
});

export const addTile = input => ({
  type: ADD_TILE,
  payload: { input }
});

export const fetchTotalCards = total => ({
  type: TOTAL_CARDS,
  payload: { total }
})

export const deleteCard = (input, i)=> ({
  type: DELETE_CARD,
  payload: { input, i }
})

// export function fetchTiles = () => {
//   return {
//     type: FETCH_TILES_SUCCESS
//   }
// }
// export function fetchTiles() {
//   return dispatch => {
//     return fetch(`http://0.0.0.0:8080/tiles` ,{
//               method: 'GET',
//               headers:{
//                   "Content-Type": 'application/json',
//               }
//           })
//           .then(res => res.json())
//           .then(res => {
//             dispatch(fetchTilesSuccess(res));
//             return res
//           })
//           .then(fetchTotalCards)
//           .catch(error => dispatch(fetchTilesFailure(error)))
//   };
// }

// export function addTile(location) {
//   return dispatch => {
//     return axios({
//       method: 'post',
//       url: `http://0.0.0.0:8080/tile`,
//       data: {
//         location: location,
//         percentage: 0,
//         cards: 1
//       }
//     })
//     .then(() => {
//       dispatch(fetchTiles());
//     })

//   };
// };

// export function addCard(el) {
//   return dispatch => {
//     return axios({
//       method: 'put',
//       url: `http://0.0.0.0:8080/tile/${el._id}`,
//       data: {cards: ++el.cards}
//     }).then(() => dispatch(fetchTiles()));
//   }
// };

// export function deleteCard(el) {
//   return dispatch => {
//   if (el.cards >= 1) {
//     return axios({
//       method: 'put',
//       url: `http://0.0.0.0:8080/tile/${el._id}`,
//       data: {cards: --el.cards}
//     }).then(() => dispatch(fetchTiles()));
//   }
//  else {
//     catchError("Can't do that!")
// }
// }
// } 

// export const FETCH_TILES_SUCCESS = 'FETCH_TILES_SUCCESS';
// export const FETCH_TILES_FAILURE = 'FETCH_TILES_FAILURE';
// export const ADD_TILE = 'ADD_TILE';
// export const ADD_CARD = 'ADD_CARD';
// export const DELETE_CARD = 'DELETE_CARD';
// export const GET_INPUT = 'GET_INPUT'
// export const TOTAL_CARDS = 'TOTAL_CARDS'
// export const CATCH_ERROR = 'CATCH_ERROR'
