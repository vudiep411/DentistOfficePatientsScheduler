export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_APPOINTMENT':
            return [...state, action.payload]
        case 'GET_APPOINTMENTS':
            return action.payload
        case 'UPDATE_APPOINTMENT':
            return state.map((app) => app._id === action.payload._id ? action.payload : app)
        case 'DELETE_APPOINTMENT':
            return state.filter((app) => app.id !== action.payload)
        default:
            return state
        
    }
    
}