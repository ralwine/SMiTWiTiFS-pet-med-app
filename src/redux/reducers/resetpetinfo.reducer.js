const resetpetinfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'RESET_PET':
            return action.payload
        
        default:
            return state
    }

}

export default resetpetinfoReducer