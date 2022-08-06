import express from 'express'
import { sendText } from '../controllers/sendTxt.js'

const router = express.Router()

router.post('/', sendText)

export default router 