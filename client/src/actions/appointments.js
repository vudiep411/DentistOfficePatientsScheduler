import * as api from '../API'

// import your action function here
export const addAppointment = (added) => async (dispatch) => {
    try {
        const { data } = await api.addAppointment(added)
        dispatch({type: 'ADD_APPOINTMENT', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getAppointments = () => async(dispatch) => {   
    try {
        const { data } = await api.getAppointments() 
        dispatch({type: 'GET_APPOINTMENTS', payload: data})   
        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateAppointment = (changed) => async(dispatch) => 
{
    try {
        const { data } = await api.updateAppointment(changed)
        dispatch({type: 'UPDATE_APPOINTMENT', payload: data})
        return data
    } catch (error) {
        console.log(error)
    }
}

export const deleteAppointment = (deleted) => async(dispatch) => {
    try {
        await api.deleteAppointment(deleted)
        dispatch({type: 'DELETE_APPOINTMENT', payload: deleted})
    } catch (error) {
        console.log(error)
    }
}
