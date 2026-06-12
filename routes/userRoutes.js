import UserController from '../controllers/userController.js'
import express from 'express'

const router = express.Router()
const userController = new UserController()

router.get('/users', userController.getAllUsers)

export default router