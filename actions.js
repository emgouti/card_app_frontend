let total = 0;

export const fetchTiles = () => ({
    type: 'FETCH_TILES'
});

export const updateCard = el => ({
    type: 'UPDATE_CARD'
});

export const addTile = location => ({
    type: 'ADD_TILE'
});

export const deleteCard = el => ({
    type: 'DELETE_CARD'
});
