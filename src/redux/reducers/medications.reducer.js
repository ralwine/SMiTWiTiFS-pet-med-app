const medicationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MEDS':
            return action.payload
        default:
            return state
    }
}

export default medicationsReducer;