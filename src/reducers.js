// import {} from '../actions'

import constants from './constants'

export const tilesReducer = (state={}, action)  => {
    if(action.type === constants.add_location) {
        return action.payload
    } else {
        return state
    }
}