const addPetsReducer = (state ={}, action) =>{
    switch (action.type){
        case 'FETCH_PETS':
            return{
                ...state,
                pets:[...state.pets, action.payload],
            };
            default:
                return state;
    }
}

export default addPetsReducer;