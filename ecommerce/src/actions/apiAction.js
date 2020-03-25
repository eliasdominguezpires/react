export const fetchPlayerList = () => {
    const API_URL = "https://football-players-b31f2.firebaseio.com/players.json";
    return dispatch => {
        return fetch(`${API_URL}`)
            .then(response => response.json())
            .then(data => dispatch(setListOfPlayers(data)))
    }
};

export const setListOfPlayers = (payload) => {
    const SEARCH = "SEARCH";

    return {
        type: SEARCH,
        payload
    }
}