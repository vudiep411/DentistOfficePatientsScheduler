import express from 'express'
import { deletePatient, getPatient, getPatients, updatePatient } from '../controllers/patients.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.get('/', auth, getPatients)
router.get('/:id', auth, getPatient)
router.delete('/:id', auth, deletePatient)
router.patch('/:id', auth, updatePatient)

export default router 