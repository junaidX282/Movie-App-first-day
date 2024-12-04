export const initialState = {
    favorites : []
}


export const reducer = (state, {type, payload}) => {

    switch(type){
        case "ADD_TO_FAVORITE" : 
            return {...state, favorites : [...state.favorites,payload]}
        case "REMOVE_FROM_FAVORITE" : 
            return {...state, favorites : state.favorites.filter(item => item.id !== payload)}
    }

    return state
}