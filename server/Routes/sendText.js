import express from 'express'
import { sendText } from '../controllers/sendTxt.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/', auth, sendText)

export default router 