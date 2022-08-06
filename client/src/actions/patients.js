import * as api from '../API'

export const getPatients = () => async (dispatch) => {
    const { data } = await api.getPatients()
    try {
        dispatch({type: 'GET_PATIENTS', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getPatient = (id) => async (dispatch) => {
    try {
        const { data } = await api.getPatient(id)
        dispatch({type: 'GET_PATIENT', payload: data})
        return data
    } catch (error) {
        console.log(error)
    }
}

export const deletePatient = (id) => async (dispatch) => {
    try {
        await api.deletePatient(id)
        dispatch({type: 'DELETE_PATIENT', payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const updatePatient = (id, data) => async (dispatch) => {
    try {
        await api.updatePatient(id, data)
        dispatch({type: 'UPDATE_PATIENT', payload: id})
    } catch (error) {
        console.log(error)
    }
}