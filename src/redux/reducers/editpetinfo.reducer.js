const editpetinfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'EDIT_PET_INFO':
            return action.payload
        
        default:
            return state
    }

}

export default editpetinfoReducer;