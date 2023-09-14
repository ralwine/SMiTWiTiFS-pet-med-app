const medinfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MED':
            return action.payload
        
        default:
            return state
    }

}

export default medinfoReducer;