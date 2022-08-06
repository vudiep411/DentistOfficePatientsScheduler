export default (state = [], action) => {
    switch(action.type) {
        case 'GET_PATIENTS':
            return action.payload
        case 'GET_PATIENT':
            return [action.payload]
        case 'DELETE_PATIENT':
            return state.filter(p => p._id !== action.payload)
        case 'UPDATE_PATIENT':
            return [...state]
        default:
            return state
        
    }
    
}