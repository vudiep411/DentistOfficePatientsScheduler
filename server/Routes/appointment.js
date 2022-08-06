import express from 'express'
import { getAppointments, addAppointment, updateAppointment, deleteAppointment } from '../controllers/appointment.js'

const router = express.Router()

router.get('/', getAppointments)
router.post('/', addAppointment)
router.patch('/', updateAppointment)
router.delete('/', deleteAppointment) 

export default router 