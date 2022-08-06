import express from 'express'
import { getAppointments, addAppointment, updateAppointment, deleteAppointment } from '../controllers/appointment.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.get('/', auth, getAppointments)
router.post('/', auth, addAppointment)
router.patch('/', auth, updateAppointment)
router.delete('/', auth, deleteAppointment) 

export default router 