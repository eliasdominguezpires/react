export default (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH':
            return { 
                ...state, 
                players: action.payload
            };
        default:
            return state
    }
}
   