import express from 'express'
import { deletePatient, getPatient, getPatients, updatePatient } from '../controllers/patients.js'

const router = express.Router()

router.get('/', getPatients)
router.get('/:id', getPatient)
router.delete('/:id', deletePatient)
router.patch('/:id', updatePatient)

export default router 