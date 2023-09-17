const resetmedinfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'RESET_MED':
            return action.payload
        
        default:
            return state
    }

}

export default resetmedinfoReducer