import axios from 'axios'

const API = axios.create({baseURL: 'https://patientscheduler.herokuapp.com/'})

export const addAppointment = (added) => API.post('/appointment', added)
export const getAppointments = () => API.get('/appointment')
export const updateAppointment = (changed) => API.patch('/appointment', changed)
export const deleteAppointment = (deleted) => API.delete('/appointment', {data: {data: deleted}})

export const getPatients = () => API.get('/patients')
export const getPatient = (id) => API.get(`/patients/${id}`)
export const deletePatient = (id) => API.delete(`/patients/${id}`)
export const updatePatient = (id, data) => API.patch(`/patients/${id}`, data)

export const sendText = (data) => API.post('/sendText', data)