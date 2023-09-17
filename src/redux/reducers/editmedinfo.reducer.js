const editmedinfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'EDIT_MED_INFO':
            return action.payload
        
        default:
            return state
    }

}

export default editmedinfoReducer;