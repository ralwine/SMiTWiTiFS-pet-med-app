// const initialState = {
//     pets: [], // This will store the list of pets
//     deleteError: null, // Store delete error if any
//   };

const petsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PETS':
            return action.payload
        default:
            return state
    }
}

export default petsReducer;