import axios from 'axios'
// https://patientscheduler.herokuapp.com/
const API = axios.create({baseURL: 'http://localhost:5000/'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile'))
    {
        const obj = JSON.parse(localStorage.getItem('profile'))
        req.headers.Authorization = `${obj.token}`
    }

    return req
})

export const addAppointment = (added) => API.post('/appointment', added)
export const getAppointments = () => API.get('/appointment')
export const updateAppointment = (changed) => API.patch('/appointment', changed)
export const deleteAppointment = (deleted) => API.delete('/appointment', {data: {data: deleted}})

export const getPatients = () => API.get('/patients')
export const getPatient = (id) => API.get(`/patients/${id}`)
export const deletePatient = (id) => API.delete(`/patients/${id}`)
export const updatePatient = (id, data) => API.patch(`/patients/${id}`, data)

export const sendText = (data) => API.post('/sendText', data)
export const signIn = (formData) => API.post('user/signin', formData)
