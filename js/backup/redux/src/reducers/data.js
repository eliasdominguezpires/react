import schema from '../schemas/index.js';
import { fromJS } from 'immutable';
import { SEARCH_ENTITIES } from '../action-types/index';

const initialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search: '',
})


function data(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ENTITIES: {
            // action.payload.query
            /*            
            const list = state.data.categories[2].playlist;
            const results = list.filter((item) => {
                return item.author.includes(action.payload.query)
            })
            */
            //Solución 1
            /*
             const results = [];
             state.data.categories.map((category) => {
                 return category.playlist.filter((item) => {
                     return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item)
                 })
             })
             */
            /*Solucion 2
            const query = action.payload.query.toLowerCase()
            const categories = state.data.categories
            let results = []
            categories
                .map(cat => cat.playlist
                    .filter(media =>
                        media.author.toLowerCase().includes(query)
                        && results.push(media)
                    )
                )
            */
            /*Solucion 3
            let results = [];
            if (action.payload.query) {
                //const query = action.payload.query.toLowerCase();
                let query = action.payload.query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                const mediaFileArray = state.data.categories.map(category => category.playlist);
                const mediaFiles = [].concat(...mediaFileArray);
                results = mediaFiles.filter((item) => {
                    return item.title.toLowerCase().includes(query) ||
                        item.author.toLowerCase().includes(query);
                });
            }
            return {
                ...state,
                search: results
            }
            */
            return state.set('search', action.payload.query)
        }
        default:
            return state
    }
}

export default data;